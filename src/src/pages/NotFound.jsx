import { Button, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <Paper elevation={0} className="surface-card">
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h3">Страница не найдена</Typography>
        <Typography color="text.secondary">
          Кажется, вы перешли по несуществующему маршруту. Вернитесь на главную или выберите пункт меню выше.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained">
          На главную
        </Button>
      </Stack>
    </Paper>
  )
}
