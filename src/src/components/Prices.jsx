import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useLocation } from 'react-router-dom'

export default function Prices() {
    const location = useLocation()
    const listServices = [
        {
            path: '/services/consultation',
            name: 'Устная консультация без исследования объектов или с ознакомлением с объектами не требующим исследования',
            price: 'Бесплатно',
            term: 'До 1 часа',
            second: '1000 ₽/час',
        },
        {
            path: '/services/consultation',
            name: 'Устная консультация с исследованием объектов, предварительными выводами, выдвижением версий',
            price: '3000 ₽',
            term: '1-3 часа',
            second: 'При большом объеме обсуждается дополнительно.',
        },
        {
            path: '/services/consultation',
            name: 'Консультация с исследованием объектов, предварительными выводами, выдвижением версий, оформленная письменно (справка эксперта; без описания исследования и признаков)',
            price: '5000 ₽',
            term: '1-3 часа',
            second: 'При большом объеме обсуждается дополнительно.',
        },
        {
            path: '/services/consultation',
            name: 'Заключение специалиста (краткое описание исследования с описанием признаков, характеризующих вывод)',
            price: '7000 ₽',
            term: '1 день',
            second: 'При большом объеме обсуждается дополнительно.',
        },
        {
            path: '/services/signature',
            name: 'Судебная почерковедческая экспертиза подписи',
            price: '12000 ₽',
            term: 'от 10 рабочих дней',
            second: '3000 ₽ за каждую дополнительную подпись.',
        },
        {
            path: '/services/signature',
            name: 'Внесудебная почерковедческая экспертиза почерка',
            price: '10000 ₽',
            term: '5-10 рабочих дней',
            second: '3000 ₽ за каждую дополнительную подпись.',
        },
        {
            path: '/services/signature',
            name: 'Подпись +расшифрока',
            price: '15000 ₽',
            term: '',
            second: '5000 ₽ за каждую дополнительную подпись.',
        },
        {
            path: '/services/signature',
            name: 'Многообъектные экспертизы (более 10, 20 подписей)',
            price: 'Договорная',
            term: '',
            second: '11 подписей одного лица и более +2000 ₽; 21 подпись  одного лица и более +1500 ₽.',
        },
        {
            path: '/services/handwriting',
            name: 'Судебная экспертиза почерка',
            price: '12000 ₽',
            term: 'от 10 рабочих дней',
            second: '3000 ₽ за каждую дополнительную почерковедческую экспертизу.',
        },
        {
            path: '/services/handwriting',
            name: 'Внесудебная экспертиза почерка',
            price: '10000 ₽',
            term: '5-10 рабочих дней',
            second: '3000 ₽ за каждую дополнительную почерковедческую экспертизу.',
        },
        {
            path: '/services/handwriting',
            name: 'Подпись +расшифровка',
            price: '15000 ₽',
            term: '',
            second: '5000 ₽ за каждую дополнительную почерковедческую экспертизу.',
        },
        {
            path: '/services/handwriting',
            name: 'Многообъектные экспертизы (более 10, 20 подписей)',
            price: '',
            term: '',
            second: '11 подписей одного лица и более +2000 ₽; 21 подпись  одного лица и более +1500 ₽.',
        },
        {
            path: '/services/review',
            name: 'Консультация о наличии ошибок',
            price: 'Бесплатно',
            term: '1-3 часа',
            second: 'Устанавливается в каждом конкретном случае отдельно.',
        },
        {
            path: '/services/review',
            name: 'Краткий анализ в письменной форме (для ходатайства)',
            price: '5000 ₽',
            term: '1-2 рабочих дня',
            second: 'Устанавливается в каждом конкретном случае отдельно.',
        },
        {
            path: '/services/review',
            name: 'Краткая рецензия',
            price: '10000 ₽',
            term: '1-2 рабочих дня',
            second: 'Устанавливается в каждом конкретном случае отдельно.',
        },
        {
            path: '/services/review',
            name: 'Полная рецензия (с описанием нарушений, их значения и влияния на вывод)',
            price: '25000 ₽',
            term: '3-10 рабочих дней',
            second: 'Устанавливается в каждом конкретном случае отдельно.',
        },
        {
            path: '/services/court',
            name: 'Судебная экспертиза',
            price: 'от 12000 ₽',
            term: 'от 10 рабочих дней',
            second: '3000 ₽ за каждую дополнительную.',
        },
        {
            path: '/services/court',
            name: 'Внесудебная экспертиза',
            price: 'от 10000 ₽',
            term: '5-10 рабочих дней',
            second: '3000 ₽ за каждую дополнительную.',
        },
        {
            path: '/services/court',
            name: 'Подпись +расшифровка',
            price: 'от 15000 ₽',
            term: '',
            second: '5000 ₽ за каждую дополнительную.',
        },
        {
            path: '/services/technical-docs',
            name: 'Письменная консультация с исследованием объектов',
            price: '3000 ₽',
            term: '1-2 часа',
            second: 'При большом объеме обсуждается дополнительно.',
        },
        {
            path: '/services/technical-docs',
            name: 'Судебная техническая экспертиза документов',
            price: 'от 15000 ₽',
            term: 'от 10 рабочих дней',
            second: '5000 ₽ за каждый дополнительный документ.',
        },
        {
            path: '/services/technical-docs',
            name: 'Внесудебная техническая экспертиза документов',
            price: 'от 12000 ₽',
            term: '5-10 рабочих дней',
            second: '5000 ₽ за каждый дополнительный документ.',
        },
        {
            path: '/services/technical-docs',
            name: 'Экспертиза монтажа',
            price: 'от 20000 ₽',
            term: 'от 10 рабочих дней',
            second: '5000 ₽ за каждую дополнительный документ.',
        },
        {
            path: '/services/technical-docs',
            name: 'Несколько направлений',
            price: 'от 20000 ₽',
            term: '',
            second: '5000 ₽ за каждое дополнительный документ.',
        },
        {
            path: '/services/technical-docs',
            name: 'Многообъектные экспертизы (более 10, 20 оттисков)',
            price: '',
            term: '',
            second: '11 оттисков  одной печати и более + 4000 ₽; 21 оттисков  одной печати и более и более + 3000 ₽',
        },
        {
            path: '/services/technical-docs/seal-verification',
            name: 'Письменная консультация с исследованием объектов',
            price: '3000 ₽',
            term: '1-2 часа',
            second: 'По договоренности.',
        },
        {
            path: '/services/technical-docs/seal-verification',
            name: 'Судебная экспертиза печати',
            price: 'от 15000 ₽',
            term: 'от 10 рабочих дней',
            second: '5000 ₽ за каждый дополнительный оттиск.',
        },
        {
            path: '/services/technical-docs/seal-verification',
            name: 'Внесудебная экспертиза печати',
            price: 'от 12000 ₽',
            term: '5-10 рабочих дней',
            second: '5000 ₽ за каждый дополнительный оттиск.',
        },
        {
            path: '/services/technical-docs/seal-verification',
            name: 'Экспертиза монтажа',
            price: 'от 20000 ₽',
            term: 'от 10 рабочих дней',
            second: '5000 ₽ за каждую дополнительный оттиск.',
        },
        {
            path: '/services/technical-docs/seal-verification',
            name: 'Несколько направлений',
            price: 'от 20000 ₽',
            term: '',
            second: '5000 ₽ за каждое дополнительный оттиск.',
        },
        {
            path: '/services/technical-docs/seal-verification',
            name: 'Многообъектные экспертизы (более 10, 20 оттисков)',
            price: 'Договорная',
            term: '',
            second: '11 оттисков  одной печати и более + 4000 ₽; 21 оттисков  одной печати и более и более + 3000 ₽',
        },
        {
            path: '/services/technical-docs/montage-verification',
            name: 'Письменная консультация с исследованием объектов',
            price: '3000 ₽',
            term: '1-2 часа',
            second: 'По договоренности.',
        },
        {
            path: '/services/technical-docs/montage-verification',
            name: 'Судебная экспертиза монтажа',
            price: 'от 20000 ₽',
            term: 'от 10 рабочих дней',
            second: '5000 ₽ за каждую дополнительный документ.',
        },
        {
            path: '/services/technical-docs/montage-verification',
            name: 'Внесудебная экспертиза монтажа',
            price: 'от 15000 ₽',
            term: '5-10 рабочих дней',
            second: '5000 ₽ за каждую дополнительный документ.',
        },
        {
            path: '/services/technical-docs/montage-verification',
            name: 'Многообъектные экспертизы (более 10, 20 оттисков)',
            price: '',
            term: '',
            second: '11 оттисков  одной печати и более + 4000 ₽; 21 оттисков  одной печати и более и более + 3000 ₽',
        },
        {
            path: '/services/technical-docs/sequence',
            name: 'Письменная консультация с исследованием объектов',
            price: '3000 ₽',
            term: '1-2 часа',
            second: 'По договоренности.',
        },
        {
            path: '/services/technical-docs/sequence',
            name: 'Судебная экспертиза последовательности',
            price: 'от 15000 ₽',
            term: 'от 10 рабочих дней',
            second: '5000 ₽ за каждую дополнительный документ.',
        },
        {
            path: '/services/technical-docs/sequence',
            name: 'Внесудебная экспертиза последовательности',
            price: 'от 12000 ₽',
            term: '5-10 рабочих дней',
            second: '5000 ₽ за каждую дополнительный документ.',
        },
        {
            path: '/services/technical-docs/sequence',
            name: 'Многообъектные экспертизы (более 10, 20 оттисков)',
            price: 'Договорная',
            term: '',
            second: '11 оттисков  одной печати и более + 4000 ₽; 21 оттисков  одной печати и более и более + 3000 ₽',
        },
    ];

    const normalizedPath = normalizePath(location?.pathname ?? '')
    const shouldShowAll = normalizedPath === '/services' || normalizedPath === '/pricing'
    const filteredServices = shouldShowAll
        ? listServices
        : listServices.filter((service) => service.path === normalizedPath)

    if (filteredServices.length === 0) {
        return <div style={{ display: 'none' }} aria-hidden="true" />
    }

    return (
        <TableContainer component="div" className="prices-table-wrapper" sx={{ marginBottom: 4 }}>
            <Table className="prices-table" size="small" aria-label="Таблица стоимости услуг">
                <TableHead>
                    <TableRow>
                        <TableCell>Услуга</TableCell>
                        <TableCell>Цена</TableCell>
                        <TableCell>Срок</TableCell>
                        <TableCell>Повторная цена</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredServices.map(({ path, name, price, term, second }) => (
                        <TableRow key={`${path}-${name}`} hover>
                            <TableCell component="th" scope="row">
                                {name}
                            </TableCell>
                            <TableCell>{price || '—'}</TableCell>
                            <TableCell>{term || '—'}</TableCell>
                            <TableCell>{second || '—'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function normalizePath(pathname = '') {
    if (!pathname) {
        return ''
    }

    const trimmed = pathname.replace(/\/+$/, '')
    return trimmed || '/'
}
