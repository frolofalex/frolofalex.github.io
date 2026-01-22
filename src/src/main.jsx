import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0066ff',
    },
    secondary: {
      main: '#212b36',
    },
    background: {
      default: '#f4f6fb',
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: 'Inter, "Roboto", "Helvetica Neue", Arial, sans-serif',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
