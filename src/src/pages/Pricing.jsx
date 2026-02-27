import { Paper, Stack, Typography } from '@mui/material'
import Prices from '../components/Prices.jsx'

export default function Pricing() {
    return (
        <Stack spacing={4}>
            <Paper elevation={0} className="surface-card">
                <Stack spacing={2}>
                    <Typography variant="h3" component="h1">
                        Стоимость услуг
                    </Typography>
                    <Typography color="text.secondary">
                        Здесь собраны базовые расценки на консультации, исследования и экспертизы. Окончательная стоимость
                        уточняется после обсуждения задачи и набора объектов.
                    </Typography>
                </Stack>
            </Paper>
            <Paper elevation={0} className="surface-card">
                <Stack spacing={3}>
                    <Typography variant="h5">Прайс-лист</Typography>
                    <Prices />
                </Stack>
            </Paper>
        </Stack>
    )
}
