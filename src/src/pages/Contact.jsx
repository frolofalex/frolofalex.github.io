import { Button, Paper, Stack, TextField, Typography } from '@mui/material'

export default function Contact() {
  return (
    <Stack spacing={4}>
      <Paper elevation={0} className="surface-card">
        <Stack spacing={2}>
          <Typography variant="h3" component="h1">
            Связаться
          </Typography>
          <Typography color="text.secondary">
            Оставьте запрос и расскажите, какие разделы и интеграции вам нужны. Мы ответим в течение одного рабочего дня.
          </Typography>
        </Stack>
      </Paper>

      <Paper elevation={1} className="contact-card">
        <Stack spacing={2}>
          <TextField label="Имя" variant="outlined" fullWidth />
          <TextField label="Email" type="email" variant="outlined" fullWidth />
          <TextField label="Сообщение" variant="outlined" multiline minRows={4} fullWidth />
          <Button variant="contained" size="large">
            Отправить
          </Button>
        </Stack>
      </Paper>
    </Stack>
  )
}
