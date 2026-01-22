import { Box, Container, Stack, Typography } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
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
            <Stack spacing={0.5} className="header-contacts desktop-only">
              <Typography variant="body2">email: info@example.com</Typography>
              <Typography variant="body2">тел: +7 (900) 000-00-00</Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box className="app-root">
        <Container maxWidth="lg">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:slug" element={<Service />} />
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
            <Typography variant="body2">email: info@example.com</Typography>
            <Typography variant="body2">тел: +7 (900) 000-00-00</Typography>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default App
