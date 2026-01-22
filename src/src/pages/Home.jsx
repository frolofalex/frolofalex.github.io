import { Box, Paper, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LanIcon from '@mui/icons-material/Lan'

const features = [
  {
    title: 'Консультация',
    description: 'Подберём эксперта и сформируем стратегию проверки документов или подписи до запуска исследований.',
    icon: AutoAwesomeIcon,
  },
  {
    title: 'Рецензирование заключений',
    description: 'Анализируем сторонние экспертизы и выдаём заключение о корректности методик и выводов.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Почерковедческая экспертиза',
    description: 'Определяем подпись и почерк, выявляем подделку и оцениваем механизмы нанесения.',
    icon: LanIcon,
  },
  {
    title: 'Техническая экспертиза документов',
    description: 'Исследуем бланки, печати, исправления, используем спектральный анализ материалов.',
    icon: AutoAwesomeIcon,
  },
  {
    title: 'Экспертиза давности',
    description: 'Определяем примерный срок создания документа или подписи по химическим и физическим признакам.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Строительная экспертиза',
    description: 'Оцениваем конструктив, материалы и соответствие регламентам, выявляем нарушения при строительстве.',
    icon: AutoAwesomeIcon,
  },
  {
    title: 'Лингвистическая экспертиза',
    description: 'Анализируем текстовые материалы, устанавливаем смысловые и авторские признаки, фиксируем искажения.',
    icon: LanIcon,
  },
  {
    title: 'Компьютерно-техническая экспертиза',
    description: 'Исследуем цифровые носители, определяем вмешательства, восстанавливаем последовательность событий.',
    icon: RocketLaunchIcon,
  },
]

export default function Home() {
  return (
    <Box className="feature-grid">
      {features.map(({ title, description, icon: Icon }) => (
        <Paper className="feature-card" elevation={1} key={title}>
          <Icon color="primary" fontSize="large" />
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography color="text.secondary">{description}</Typography>
        </Paper>
      ))}
    </Box>
  )
}
