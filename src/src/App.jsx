import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

function App() {
  return (
    <>
      <Box component="header" className="site-header">
        <Container maxWidth="lg">
          <Box className="header-row">
            <Box className="logo-placeholder" />
            <Stack spacing={0.5} className="brand-block">
              <Typography variant="h6" className="branding">
                Аргумент
              </Typography>
              <Typography variant="body2">г. Москва, ул. Примерная, д. 1</Typography>
            </Stack>
            <Stack spacing={1} className="header-contacts desktop-only">
              <Link href="mailto:info@example.com" className="contact-link">
                <MailOutlineIcon fontSize="small" className="contact-icon" />
                <span>info@example.com</span>
              </Link>
              <Link href="tel:+79000000000" className="contact-link">
                <PhoneInTalkIcon fontSize="small" className="contact-icon" />
                <span>+7 (900) 000-00-00</span>
              </Link>
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
            <Link href="mailto:info@example.com" className="contact-link">
              <MailOutlineIcon fontSize="small" className="contact-icon" />
              <span>info@example.com</span>
            </Link>
            <Link href="tel:+79000000000" className="contact-link">
              <PhoneInTalkIcon fontSize="small" className="contact-icon" />
              <span>+7 (900) 000-00-00</span>
            </Link>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default App
