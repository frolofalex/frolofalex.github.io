import { Box, Stack } from '@mui/material'
import { useEffect } from 'react'
import { services } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'
import PromoCarousel from '../components/PromoCarousel.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Аргумент'
  }, [])

  return (
    <Stack spacing={3}>
      <PromoCarousel />
      <Box className="feature-grid">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </Box>
    </Stack>
  )
}
