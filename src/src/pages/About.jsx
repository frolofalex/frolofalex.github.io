import { Avatar, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import InsightsIcon from '@mui/icons-material/Insights'
import SpeedIcon from '@mui/icons-material/Speed'
import SecurityIcon from '@mui/icons-material/Security'

const pillars = [
  {
    title: 'Осознанный дизайн',
    description: 'Используем систему токенов и компоненты MUI, поэтому масштабирование интерфейса происходит без боли.',
    icon: InsightsIcon,
  },
  {
    title: 'Быстрые итерации',
    description: 'Vite и React Router дают молниеносную разработку, а билд сразу попадает в нужную директорию.',
    icon: SpeedIcon,
  },
  {
    title: 'Надёжный деплой',
    description: '404.html дублирует index, что позволяет GitHub Pages корректно обрабатывать client-side маршруты.',
    icon: SecurityIcon,
  },
]

export default function About() {
  return (
    <Stack spacing={4}>
      <Paper elevation={0} className="surface-card">
        <Stack spacing={2}>
          <Typography variant="h3" component="h1">
            О проекте
          </Typography>
          <Typography color="text.secondary">
            Этот шаблон создавался как базис для лендингов и документации, которые живут на GitHub Pages.
            Он включает полноценный фронтенд-стэк, маршрутизацию и готов к кастомизации без сложных настроек.
          </Typography>
        </Stack>
      </Paper>

      <Grid container spacing={3}>
        {pillars.map(({ title, description, icon: Icon }) => (
          <Grid item xs={12} md={4} key={title}>
            <Paper className="pillar-card" elevation={1}>
              <Avatar className="pillar-icon">
                <Icon color="primary" />
              </Avatar>
              <Typography variant="h6">{title}</Typography>
              <Typography color="text.secondary">{description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={0} className="surface-card">
        <Stack spacing={2}>
          <Typography variant="h5">Что входит</Typography>
          <Divider />
          <ul className="about-list">
            <li>React 18 + React Router 7</li>
            <li>Material UI с темой и глобальным стилем</li>
            <li>Vite с кастомным outDir и генерацией 404.html</li>
            <li>Готовая структура страниц и блоков</li>
          </ul>
        </Stack>
      </Paper>
    </Stack>
  )
}
