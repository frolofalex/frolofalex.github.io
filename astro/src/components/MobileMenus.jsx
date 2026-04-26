import { useState } from 'react'
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, ThemeProvider, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { theme } from '../theme.js'

export default function MobileMenus({ navServices, headerMenuItems }) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      {/* Hamburger button — mobile only */}
      <IconButton
        className="nav-menu-toggle mobile-only"
        aria-label="Открыть меню"
        onClick={() => setNavOpen(true)}
        size="large"
      >
        <MenuIcon />
      </IconButton>

      {/* Services button — mobile only */}
      <button
        type="button"
        className="services-menu-button mobile-only"
        onClick={() => setServicesOpen(true)}
      >
        Услуги
      </button>

      {/* Services drawer */}
      <Drawer
        anchor="right"
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
        className="services-drawer"
        ModalProps={{ keepMounted: true }}
      >
        <Box className="services-drawer-content">
          <Stack direction="row" alignItems="center" justifyContent="space-between" className="services-drawer-header">
            <Typography variant="subtitle1" component="h2">Услуги</Typography>
            <IconButton aria-label="Закрыть меню" onClick={() => setServicesOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Box className="services-panel-content">
            <List disablePadding className="services-list">
              {navServices.flatMap((service) => [
                <ListItemButton
                  key={service.path}
                  component="a"
                  href={`/services/${service.path}`}
                  onClick={() => setServicesOpen(false)}
                  className="services-list-item"
                  sx={{ pl: 2 }}
                >
                  <ListItemText
                    primary={service.title}
                    primaryTypographyProps={{ variant: 'body2', className: 'services-list-text' }}
                  />
                </ListItemButton>,
                ...(service.children ?? []).map((child) => (
                  <ListItemButton
                    key={child.path}
                    component="a"
                    href={`/services/${child.path}`}
                    onClick={() => setServicesOpen(false)}
                    className="services-list-item"
                    sx={{ pl: 3.5 }}
                  >
                    <ListItemText
                      primary={child.title}
                      primaryTypographyProps={{ variant: 'body2', className: 'services-list-text' }}
                    />
                  </ListItemButton>
                )),
              ])}
            </List>
          </Box>
        </Box>
      </Drawer>

      {/* Navigation drawer */}
      <Drawer
        anchor="left"
        open={navOpen}
        onClose={() => setNavOpen(false)}
        className="nav-drawer"
        ModalProps={{ keepMounted: true }}
      >
        <Box className="nav-drawer-content">
          <Stack direction="row" alignItems="center" justifyContent="space-between" className="nav-drawer-header">
            <Typography variant="subtitle1" component="h2">Меню</Typography>
            <IconButton aria-label="Закрыть меню" onClick={() => setNavOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <nav aria-label="Мобильное меню" className="nav-drawer-nav">
            <ul className="nav-drawer-list">
              {headerMenuItems.map((item) => (
                <li key={item.label} className="nav-drawer-item">
                  <a href={item.path} className="nav-drawer-link" onClick={() => setNavOpen(false)}>
                    {item.label}
                  </a>
                  {item.submenu && (
                    <ul className="nav-drawer-submenu">
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <a href={sub.path} className="nav-drawer-sublink" onClick={() => setNavOpen(false)}>
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </Box>
      </Drawer>
    </ThemeProvider>
  )
}
