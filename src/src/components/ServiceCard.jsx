import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

export default function ServiceCard({ service }) {
  const { slug, title, description, children = [], path } = service
  const navigate = useNavigate()

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
      <Stack spacing={1.5}>
        <Typography variant="h6" className="card-link">
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </Stack>
      <ArrowForwardIosIcon className="card-arrow" fontSize="inherit" />
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
