import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { services } from '../data/services.js'

export default function ServicesPanel({ onNavigate, heading = 'Все услуги' }) {
  const location = useLocation()
  const currentPath = normalizeServicePath(location.pathname)

  return (
    <Box component="nav" className="services-panel-content" aria-label="Список услуг">
      {heading && (
        <Typography variant="overline" className="services-panel-title">
          {heading}
        </Typography>
      )}
      <List disablePadding className="services-list">
        {services.map((service) => (
          <ServicesPanelItem
            key={service.path}
            service={service}
            level={0}
            currentPath={currentPath}
            onNavigate={onNavigate}
          />
        ))}
      </List>
    </Box>
  )
}

function ServicesPanelItem({ service, level, currentPath, onNavigate }) {
  const { path, title, children = [] } = service
  const isCurrent = currentPath === path
  const isAncestor = currentPath?.startsWith(`${path}/`)
  const classNames = ['services-list-item']

  if (isCurrent) {
    classNames.push('services-list-item--active')
  } else if (isAncestor) {
    classNames.push('services-list-item--ancestor')
  }

  const handleClick = () => {
    if (typeof onNavigate === 'function') {
      onNavigate()
    }
  }

  return (
    <>
      <ListItemButton
        component={RouterLink}
        to={`/services/${path}`}
        onClick={handleClick}
        className={classNames.join(' ')}
        sx={{ pl: 2 + level * 1.5 }}
      >
        <ListItemText
          primary={title}
          primaryTypographyProps={{ variant: 'body2', className: 'services-list-text' }}
        />
      </ListItemButton>
      {children.length > 0 && (
        <List disablePadding>
          {children.map((child) => (
            <ServicesPanelItem
              key={child.path}
              service={child}
              level={level + 1}
              currentPath={currentPath}
              onNavigate={onNavigate}
            />
          ))}
        </List>
      )}
    </>
  )
}

function normalizeServicePath(pathname) {
  if (!pathname?.startsWith('/services')) {
    return null
  }

  return pathname.replace(/^\/services\/?/, '').replace(/\/$/, '')
}
