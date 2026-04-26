import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0066ff' },
    secondary: { main: '#212b36' },
    background: { default: '#f4f6fb' },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: 'Inter, "Roboto", "Helvetica Neue", Arial, sans-serif',
  },
})
