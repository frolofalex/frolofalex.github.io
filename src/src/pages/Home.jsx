import { Box } from '@mui/material'
import { useEffect } from 'react'
import { services } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Аргумент'
  }, [])

  return (
    <Box className="feature-grid">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </Box>
  )
}
