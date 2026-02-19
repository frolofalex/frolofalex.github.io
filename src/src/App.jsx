import { Box, Button, Container, Drawer, IconButton, Link as MuiLink, Stack, Typography } from '@mui/material'
import { Link as RouterLink, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import CloseIcon from '@mui/icons-material/Close'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import NotFound from './pages/NotFound.jsx'
import { CONTACT_EMAIL, CONTACT_PHONE_DIAL, CONTACT_PHONE_DISPLAY } from './constants/contacts.js'
import ServicesPanel from './components/ServicesPanel.jsx'
import './App.css'

function App() {
  const [isServicesDrawerOpen, setIsServicesDrawerOpen] = useState(false)
  const logoImage = '/logo.png'
  const contactLinkSx = {
    color: '#27348b',
    transition: 'color 0.2s ease',
    '&:hover': { color: '#1a215f' },
  }

  const openServicesDrawer = () => setIsServicesDrawerOpen(true)
  const closeServicesDrawer = () => setIsServicesDrawerOpen(false)

  return (
    <>
      <Box component="header" className="site-header">
        <Container maxWidth="lg">
          <Box className="header-row">
            <Box component={RouterLink} to="/" className="brand-link" aria-label="Перейти на главную">
              <Box component="img" src={logoImage} alt="Логотип Аргумент" className="logo-placeholder" />
              <Stack spacing={0.5} className="brand-block">
                <Typography variant="h6" className="branding">
                  Аргумент
                </Typography>
                <Typography variant="body2">г. Москва, ул. Примерная, д. 1</Typography>
              </Stack>
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
    </>
  )
}

export default App
