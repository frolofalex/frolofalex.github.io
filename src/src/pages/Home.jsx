import { Box, Paper, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Link as RouterLink } from 'react-router-dom'
import { services } from '../data/services.js'

export default function Home() {
  return (
    <Box className="feature-grid">
      {services.map(({ title, description, slug }) => (
        <Paper
          className="feature-card"
          elevation={1}
          key={title}
          component={RouterLink}
          to={`/services/${slug}`}
        >
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography color="text.secondary">{description}</Typography>
          <ArrowForwardIosIcon className="card-arrow" fontSize="inherit" />
        </Paper>
      ))}
    </Box>
  )
}
