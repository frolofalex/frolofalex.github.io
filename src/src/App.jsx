import { Box, Button, Chip, Container, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LanIcon from '@mui/icons-material/Lan'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import GitHubIcon from '@mui/icons-material/GitHub'
import './App.css'

const features = [
  {
    title: 'Продуктовая подача',
    description: 'Готовая дизайн-система на MUI, которая органично смотрится в светлом и тёмном режиме.',
    icon: AutoAwesomeIcon,
  },
  {
    title: 'Молниеносный билд',
    description: 'Vite + React-SWC дают мгновенную разработку и сборку без лишнего ожидания.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Готово к GitHub Pages',
    description: 'Бандл автоматически уходит в корень репозитория, а 404.html дублирует index для SPA-роутинга.',
    icon: LanIcon,
  },
]

const steps = [
  { label: '01', title: 'Расскажите о проекте', body: 'Опишите цель, стиль и ключевые разделы, которые нужны на сайте.' },
  { label: '02', title: 'Собираем UI', body: 'Компоненты MUI легко комбинируются, поэтому новые блоки добавляются за минуты.' },
  { label: '03', title: 'Деплой одним скриптом', body: 'Запускаем npm run build и отправляем содержимое репозитория на GitHub Pages.' },
]

function App() {
  return (
    <Box className="app-root">
      <Container maxWidth="lg">
        <Paper elevation={0} className="hero">
          <Stack spacing={3}>
            <Chip label="Frontend на React + MUI" color="primary" variant="outlined" size="small" />
            <Typography variant="h2" component="h1">
              Соберите современный лендинг под GitHub Pages
            </Typography>
            <Typography color="text.secondary" variant="h6" sx={{ maxWidth: 720 }}>
              Полностью настроенный стек с Material UI, темизацией и правильным билдом прямо в корень репозитория.
              Разработка и публикация занимают считанные минуты.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" size="large" endIcon={<ArrowOutwardIcon />}>
                Смотреть демо
              </Button>
              <Button variant="outlined" size="large" startIcon={<GitHubIcon />} component="a" href="https://github.com" target="_blank" rel="noreferrer">
                Репозиторий
              </Button>
            </Stack>
          </Stack>
        </Paper>

        <Grid container spacing={3}>
          {features.map(({ title, description, icon: Icon }) => (
            <Grid item xs={12} md={4} key={title}>
              <Paper className="feature-card" elevation={1}>
                <Icon color="primary" fontSize="large" />
                <Typography variant="h6" component="h3">
                  {title}
                </Typography>
                <Typography color="text.secondary">{description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper elevation={0} className="timeline-card">
          <Stack spacing={3}>
            <Typography variant="h5" component="h2">
              Процесс запуска
            </Typography>
            <Divider />
            <Grid container spacing={3}>
              {steps.map(({ label, title, body }) => (
                <Grid item xs={12} md={4} key={title}>
                  <Stack spacing={1.5}>
                    <Chip label={label} color="primary" size="small" />
                    <Typography variant="h6">{title}</Typography>
                    <Typography color="text.secondary">{body}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Paper>

        <Paper elevation={0} className="cta-card">
          <Stack spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }} direction={{ xs: 'column', sm: 'row' }}>
            <Stack spacing={0.5} flex={1}>
              <Typography variant="h5">Готовы к продакшену</Typography>
              <Typography color="text.secondary">
                Просто обновите контент и запустите <code>npm run build</code> — файлы попадут в корень и сайт станет доступен по домену.
              </Typography>
            </Stack>
            <Button variant="contained" color="secondary" size="large">
              Настроить контент
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}

export default App
