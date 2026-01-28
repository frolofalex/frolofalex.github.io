import { Box, Stack } from '@mui/material'
import { useEffect } from 'react'
import { services } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'
import PromoCard from '../components/PromoCard.jsx'
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_DIAL } from '../constants/contacts.js'
import { homePromo } from '../data/services.js'

export default function Home() {
  useEffect(() => {
    document.title = 'Аргумент'
  }, [])

  return (
    <Stack spacing={3}>
      {homePromo && (
        <PromoCard
          title={homePromo.title}
          price={homePromo.price}
          description={homePromo.description}
          phoneDisplay={CONTACT_PHONE_DISPLAY}
          phoneNumber={CONTACT_PHONE_DIAL}
          backgroundImage={homePromo.backgroundImage}
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
