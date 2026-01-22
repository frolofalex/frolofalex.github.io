import { Paper, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { services } from '../data/services.js'
import NotFound from './NotFound.jsx'

export default function Service() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return <NotFound />
  }

  return (
    <Paper elevation={0} className="surface-card">
      <Stack spacing={2}>
        <Typography variant="h3" component="h1">
          {service.title}
        </Typography>
        <Typography color="text.secondary">{service.description}</Typography>
        <Typography color="text.secondary">{service.details}</Typography>
      </Stack>
    </Paper>
  )
}
