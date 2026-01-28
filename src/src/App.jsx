import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material'
import { Link as RouterLink, Route, Routes } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import NotFound from './pages/NotFound.jsx'
import { CONTACT_EMAIL, CONTACT_PHONE_DIAL, CONTACT_PHONE_DISPLAY } from './constants/contacts.js'
import './App.css'

function App() {
  const logoImage = '/logo.png'
  const contactLinkSx = {
    color: '#27348b',
    transition: 'color 0.2s ease',
    '&:hover': { color: '#1a215f' },
  }

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
          </Box>
        </Container>
      </Box>
      <Box className="app-root">
        <Container maxWidth="lg">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/*" element={<Service />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
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
    </>
  )
}

export default App
