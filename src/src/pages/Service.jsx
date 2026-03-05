import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Collapse, Paper, Stack, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findService } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'
import NotFound from './NotFound.jsx'
import PromoCard from '../components/PromoCard.jsx'
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_DIAL } from '../constants/contacts.js'
import Prices from '../components/Prices.jsx'

export default function Service() {
  const { '*': wildcardPath } = useParams()
  const pathSegments = wildcardPath ? wildcardPath.split('/').filter(Boolean) : []
  const service = findService(pathSegments)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const promoOptions = useMemo(() => {
    if (!service?.promo) {
      return []
    }
    const base = Array.isArray(service.promo) ? service.promo : [service.promo]
    return base.filter(Boolean)
  }, [service])
  const selectedPromo = useMemo(() => {
    if (!service || promoOptions.length === 0) {
      return null
    }
    const randomIndex = Math.floor(Math.random() * promoOptions.length)
    return promoOptions[randomIndex]
  }, [promoOptions, service])

  useEffect(() => {
    document.title = service ? `Аргумент — ${service.title}` : 'Аргумент'
  }, [service])

  if (!service) {
    return <NotFound />
  }

  const childServices = service.children ?? []
  const detailParagraphs = Array.isArray(service.details)
    ? service.details
    : typeof service.details === 'string'
      ? /<\s*[\w!?]/.test(service.details)
        ? [service.details]
        : service.details
            .split(/\n\s*\n+/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean)
      : []

  return (
    <Stack spacing={4}>
      {selectedPromo && (
        <PromoCard
          title={selectedPromo.title}
          price={selectedPromo.price}
          description={selectedPromo.description}
          backgroundImage={selectedPromo.backgroundImage}
          phoneDisplay={CONTACT_PHONE_DISPLAY}
          phoneNumber={CONTACT_PHONE_DIAL}
        />
      )}
      {childServices.length > 0 && (
        <Box>
          <Box className="feature-grid">
            {childServices.map((child) => (
              <ServiceCard key={child.slug} service={child} />
            ))}
          </Box>
        </Box>
      )}
      <Paper elevation={0} className="surface-card">
        <Prices />
        <Stack spacing={2}>
          <Typography variant="h3" component="h1">
            {service.title}
          </Typography>
          {service.description && (
            <Typography
              color="text.secondary"
              component="div"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          )}
          {detailParagraphs.length > 0 && (
            <>
              <Collapse in={isDetailsOpen} timeout="auto" unmountOnExit>
                <Stack spacing={2}>
                  {detailParagraphs.map((paragraph, index) => (
                    <Typography
                      key={index}
                      color="text.secondary"
                      component="div"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </Stack>
              </Collapse>
              <Button
                type="button"
                variant="text"
                size="medium"
                className="details-toggle"
                onClick={() => setIsDetailsOpen((prev) => !prev)}
                endIcon={
                  <ExpandMoreIcon
                    className={`details-toggle-icon${isDetailsOpen ? ' details-toggle-icon--rotated' : ''}`}
                  />
                }
              >
                {isDetailsOpen ? 'Скрыть подробности' : 'Показать подробности'}
              </Button>
            </>
          )}
        </Stack>
      </Paper>
    </Stack>
  )
}
