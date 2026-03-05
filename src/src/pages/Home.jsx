import { Box, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { services } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'
import PromoCard from '../components/PromoCard.jsx'
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_DIAL } from '../constants/contacts.js'
import { homePromo } from '../data/services.js'

export default function Home() {
  useEffect(() => {
    document.title = 'Аргумент'
  }, [])

  const [selectedPromo] = useState(() => {
    if (!homePromo) {
      return null
    }
    const base = Array.isArray(homePromo) ? homePromo : [homePromo]
    const options = base.filter(Boolean)
    if (options.length === 0) {
      return null
    }
    const randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
  })

  return (
    <Stack spacing={3}>
      {selectedPromo && (
        <PromoCard
          title={selectedPromo.title}
          price={selectedPromo.price}
          description={selectedPromo.description}
          phoneDisplay={CONTACT_PHONE_DISPLAY}
          phoneNumber={CONTACT_PHONE_DIAL}
          backgroundImage={selectedPromo.backgroundImage}
        />
      )}
      <Box className="feature-grid">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </Box>
    </Stack>
  )
}
