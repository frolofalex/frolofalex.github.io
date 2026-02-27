import { Box, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

const iconModules = import.meta.glob('../assets/service-icons/*.png', {
  eager: true,
  import: 'default',
})

const serviceIconMap = Object.entries(iconModules).reduce((acc, [path, module]) => {
  const fileName = path.split('/').pop()?.replace(/\.png$/i, '')
  if (fileName) {
    acc[fileName] = module
  }
  return acc
}, {})

const fallbackIcon = serviceIconMap.default ?? Object.values(serviceIconMap)[0] ?? null

export default function ServiceCard({ service }) {
  const { slug, title, description, children = [], path } = service
  const navigate = useNavigate()
  const iconKey = service.icon ?? slug ?? path
  const normalizedKey = iconKey?.split('/').pop()
  const iconSrc = (normalizedKey && serviceIconMap[normalizedKey]) || fallbackIcon

  const goToService = () => {
    navigate(`/services/${path ?? slug}`)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      goToService()
    }
  }

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  return (
    <Paper
      elevation={1}
      className="feature-card"
      component="article"
      tabIndex={0}
      role="link"
      aria-label={`Перейти в раздел ${title}`}
      onClick={goToService}
      onKeyDown={handleKeyDown}
    >
      <Stack spacing={1.5} className="feature-card-head" direction="row" alignItems="center">
        {iconSrc && (
          <Box
            component="img"
            src={iconSrc}
            alt=""
            role="presentation"
            aria-hidden="true"
            className="service-card-icon"
            loading="lazy"
          />
        )}
        <Typography className="card-link" component="span" sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
          {title}
        </Typography>
      </Stack>
      {children.length > 0 && (
        <Stack component="ul" className="child-links">
          {children.map((child) => (
            <li key={child.slug}>
              <RouterLink
                to={`/services/${child.path ?? child.slug}`}
                className="child-link"
                onClick={stopPropagation}
              >
                — {child.title}
              </RouterLink>
            </li>
          ))}
        </Stack>
      )}
    </Paper>
  )
}
