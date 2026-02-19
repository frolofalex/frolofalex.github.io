import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { Button, Paper, Stack, Typography } from '@mui/material'

export default function PromoCard({ title, price, description, phoneDisplay, phoneNumber, backgroundImage }) {
  const sanitizedPhone = phoneNumber ?? phoneDisplay?.replace(/[^+\d]/g, '')
  const telHref = sanitizedPhone ? `tel:${sanitizedPhone}` : undefined
  const hasCustomBackground = Boolean(backgroundImage)
  const overlayLayer = 'linear-gradient(120deg, rgba(9, 14, 40, 0.85), rgba(39, 52, 139, 0.75))'
  const placeholderLayer = 'linear-gradient(135deg, #162042 0%, #27348b 100%)'
  const cardStyle = {
    backgroundImage: hasCustomBackground ? `${overlayLayer}, url(${backgroundImage})` : `${overlayLayer}, ${placeholderLayer}`,
  }
  const className = `promo-card promo-card--contrast${hasCustomBackground ? ' promo-card--with-bg' : ''}`

  return (
    <Paper
      elevation={0}
      className={className}
      style={cardStyle}
    >
      <Stack className="promo-card-content">
        <Typography variant="h3" className="promo-title">
          {title}
        </Typography>
        <Typography variant="body1" className="promo-text">
          {description}
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          alignItems={{ xs: 'stretch', sm: 'center' }}
          className="promo-cta-row"
        >
          <Typography variant="h4" className="promo-price">
            {price}
          </Typography>
          <Button
            component="a"
            href={telHref}
            variant="contained"
            size="large"
            startIcon={<PhoneInTalkIcon />}
            className="promo-button"
          >
            Позвонить
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}
