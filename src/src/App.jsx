import { Box, Button, Container, Drawer, IconButton, Link as MuiLink, Stack, Typography } from '@mui/material'
import { Link as RouterLink, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import Service from './pages/Service.jsx'
import NotFound from './pages/NotFound.jsx'
import { CONTACT_EMAIL, CONTACT_PHONE_DIAL, CONTACT_PHONE_DISPLAY } from './constants/contacts.js'
import ServicesPanel from './components/ServicesPanel.jsx'
import './App.css'

function App() {
  const [isServicesDrawerOpen, setIsServicesDrawerOpen] = useState(false)
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)
  const logoImage = '/logo.png'
  const contactLinkSx = {
    color: '#27348b',
    transition: 'color 0.2s ease',
    '&:hover': { color: '#1a215f' },
  }
  const headerMenuItems = [
    {
      label: 'О компании',
      path: '/about',
      submenu: [
        { label: 'Эксперты', path: '/about/experts' },
        { label: 'Документы', path: '/about/documents' },
        { label: 'Оснащение', path: '/about/equipment' },
      ],
    },
    { label: 'Цены', path: '/pricing' },
    { label: 'Статьи/Видео', path: '/media' },
    { label: 'Контакты', path: '/contacts' },
    { label: 'Вакансии', path: '/careers' },
    { label: 'Вопросы/Ответы', path: '/faq' },
  ]

  const openServicesDrawer = () => setIsServicesDrawerOpen(true)
  const closeServicesDrawer = () => setIsServicesDrawerOpen(false)
  const openNavDrawer = () => setIsNavDrawerOpen(true)
  const closeNavDrawer = () => setIsNavDrawerOpen(false)

  return (
    <>
      <Box component="header" className="site-header">
        <Container maxWidth="lg">
          <Box className="header-row">
            <IconButton
              className="nav-menu-toggle mobile-only"
              aria-label="Открыть меню"
              onClick={openNavDrawer}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <Box component={RouterLink} to="/" className="brand-link" aria-label="Перейти на главную">
              <Box component="img" src={logoImage} alt="Логотип Аргумент" className="logo-placeholder" />
              <Stack spacing={0.5} className="brand-block">
                <Typography variant="h6" className="branding">
                  Аргумент
                </Typography>
                <Typography variant="body2">г. Москва, ул. Примерная, д. 1</Typography>
              </Stack>
            </Box>
            <Box component="nav" className="header-menu desktop-only" aria-label="Основное меню">
              <Box component="ul" className="header-menu-grid">
                {headerMenuItems.map((item) => (
                  <Box
                    component="li"
                    key={item.label}
                    className={`header-menu-item${item.submenu ? ' has-submenu' : ''}`}
                  >
                    <Box component={RouterLink} to={item.path} className="header-menu-link">
                      {item.label}
                    </Box>
                    {item.submenu && (
                      <Box component="ul" className="header-submenu" role="menu">
                        {[{ label: item.label, path: item.path, isPrimary: true }, ...item.submenu].map((subItem) => (
                          <Box component="li" key={subItem.label} className="header-submenu-item">
                            <Box
                              component={RouterLink}
                              to={subItem.path}
                              className={`header-submenu-link${subItem.isPrimary ? ' header-submenu-link--primary' : ''}`}
                            >
                              {subItem.label}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
            <Stack spacing={1} className="header-contacts desktop-only">
              <MuiLink
                href={`mailto:${CONTACT_EMAIL}`}
                className="contact-link"
                underline="none"
                sx={contactLinkSx}
              >
                <MailOutlineIcon fontSize="small" className="contact-icon" />
                <span>{CONTACT_EMAIL}</span>
              </MuiLink>
              <MuiLink
                href={`tel:${CONTACT_PHONE_DIAL}`}
                className="contact-link"
                underline="none"
                sx={contactLinkSx}
              >
                <PhoneInTalkIcon fontSize="small" className="contact-icon" />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </MuiLink>
            </Stack>
            <Button
              type="button"
              variant="contained"
              size="small"
              className="services-menu-button mobile-only"
              onClick={openServicesDrawer}
            >
              Услуги
            </Button>
          </Box>
        </Container>
      </Box>
      <Box className="app-root">
        <Box className="app-layout">
          <Box component="aside" className="services-panel desktop-only">
            <ServicesPanel />
          </Box>
          <Box className="app-content">
            <Container maxWidth="lg">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services/*" element={<Service />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </Box>
        </Box>
      </Box>
      <Box component="footer" className="site-footer">
        <Container maxWidth="lg">
          <Stack
            spacing={0.5}
            className="mobile-only footer-contacts"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <MuiLink
              href={`mailto:${CONTACT_EMAIL}`}
              className="contact-link"
              underline="none"
              sx={contactLinkSx}
            >
              <MailOutlineIcon fontSize="small" className="contact-icon" />
              <span>{CONTACT_EMAIL}</span>
            </MuiLink>
            <MuiLink
              href={`tel:${CONTACT_PHONE_DIAL}`}
              className="contact-link"
              underline="none"
              sx={contactLinkSx}
            >
              <PhoneInTalkIcon fontSize="small" className="contact-icon" />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </MuiLink>
          </Stack>
        </Container>
      </Box>
      <Drawer
        anchor="right"
        open={isServicesDrawerOpen}
        onClose={closeServicesDrawer}
        className="services-drawer"
        ModalProps={{ keepMounted: true }}
      >
        <Box className="services-drawer-content">
          <Stack direction="row" alignItems="center" justifyContent="space-between" className="services-drawer-header">
            <Typography variant="subtitle1" component="h2">
              Услуги
            </Typography>
            <IconButton aria-label="Закрыть меню" onClick={closeServicesDrawer}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <ServicesPanel heading={null} onNavigate={closeServicesDrawer} />
        </Box>
      </Drawer>
      <Drawer
        anchor="left"
        open={isNavDrawerOpen}
        onClose={closeNavDrawer}
        className="nav-drawer"
        ModalProps={{ keepMounted: true }}
      >
        <Box className="nav-drawer-content">
          <Stack direction="row" alignItems="center" justifyContent="space-between" className="nav-drawer-header">
            <Typography variant="subtitle1" component="h2">
              Меню
            </Typography>
            <IconButton aria-label="Закрыть меню" onClick={closeNavDrawer}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Box component="nav" aria-label="Мобильное меню" className="nav-drawer-nav">
            <Box component="ul" className="nav-drawer-list">
              {headerMenuItems.map((item) => (
                <Box component="li" key={item.label} className="nav-drawer-item">
                  <Box
                    component={RouterLink}
                    to={item.path}
                    className="nav-drawer-link"
                    onClick={closeNavDrawer}
                  >
                    {item.label}
                  </Box>
                  {item.submenu && (
                    <Box component="ul" className="nav-drawer-submenu">
                      {item.submenu.map((subItem) => (
                        <Box component="li" key={subItem.label}>
                          <Box
                            component={RouterLink}
                            to={subItem.path}
                            className="nav-drawer-sublink"
                            onClick={closeNavDrawer}
                          >
                            {subItem.label}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default App
