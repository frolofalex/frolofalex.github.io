import { Box, Paper, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findService } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'
import NotFound from './NotFound.jsx'

export default function Service() {
  const { '*': wildcardPath } = useParams()
  const pathSegments = wildcardPath ? wildcardPath.split('/').filter(Boolean) : []
  const service = findService(pathSegments)

  useEffect(() => {
    document.title = service ? `Аргумент — ${service.title}` : 'Аргумент'
  }, [service])

  if (!service) {
    return <NotFound />
  }

  const childServices = service.children ?? []

  return (
    <Stack spacing={4}>
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
        <Stack spacing={2}>
          <Typography variant="h3" component="h1">
            {service.title}
          </Typography>
          <Typography color="text.secondary">{service.description}</Typography>
          <Typography color="text.secondary">{service.details}</Typography>
        </Stack>
      </Paper>
    </Stack>
  )
}
