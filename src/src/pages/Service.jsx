import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Collapse, Paper, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findService } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'
import NotFound from './NotFound.jsx'
import PromoCarousel from '../components/PromoCarousel.jsx'
import Prices from '../components/Prices.jsx'

export default function Service() {
  const { '*': wildcardPath } = useParams()
  const pathSegments = wildcardPath ? wildcardPath.split('/').filter(Boolean) : []
  const service = findService(pathSegments)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

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
      <PromoCarousel />
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
        <Typography variant="h3" component="h1" sx={{mb: 2}}>
          {service.title}
        </Typography>
        <Prices selected={service.prices} />
        <Stack spacing={2}>
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
