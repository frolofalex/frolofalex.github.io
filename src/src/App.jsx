import { Box, Container, Stack, Typography } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
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
            <Stack spacing={0.5} className="header-contacts">
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
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Box>
    </>
  )
}

export default App
