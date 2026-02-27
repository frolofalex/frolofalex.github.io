import { getHtmlSnippet } from '../content/htmlSnippets.js'

const html = (key) => getHtmlSnippet(`services/${key}`)

export const homePromo = {
  title: 'Комплексное сопровождение бизнеса',
  price: 'от 15 000 ₽ / месяц',
  description: 'Полный пакет юридических услуг, персональный менеджер и оперативное подключение к экспертам.',
  backgroundImage: null,
}

const servicesTree = [
  {
    slug: 'consultation',
    title: 'Консультация',
    description: html('consultation/description'),
    details: html('consultation/details'),
    promo: {
      title: 'Экспресс-консультация эксперта',
      price: 'от 7 500 ₽',
      description: 'За 24 часа подготовим заключение по перспективам дела и дадим чек-лист следующего шага.',
      backgroundImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80',
    },
    children: [],
  },
  {
    slug: 'signature',
    title: 'Экспертиза подписи',
    description: html('signature/description'),
    details: html('signature/details'),
    children: [],
  },
  {
    slug: 'handwriting',
    title: 'Почерковедческая экспертиза',
    description: html('handwriting/description'),
    details: html('handwriting/details'),
    children: [],
  },
  {
    slug: 'review',
    title: 'Рецензирование заключений',
    description: html('review/description'),
    details: html('review/details'),
    children: [],
  },
  {
    slug: 'court',
    title: 'Судебная и досудебная экспертизы',
    description: html('court/description'),
    details: html('court/details'),
    children: [],
  },
  {
    slug: 'technical-docs',
    title: 'Техническая экспертиза документов',
    description: html('technical-docs/description'),
    details: html('technical-docs/details'),
    promo: {
      title: 'Комплексная проверка документов',
      price: 'от 22 000 ₽',
      description: 'В одном пакете — экспертиза печатей, чернил и бумаги с итоговым отчётом для суда.',
      backgroundImage: null,
    },
    children: [
      {
        slug: 'seal-verification',
        title: 'Техническая экспертиза печатей',
        description: html('technical-docs/seal-verification/description'),
        details: html('technical-docs/seal-verification/details'),
        children: [],
      },
      {
        slug: 'montage-verification',
        title: 'Техническая экспертиза монтажа',
        description: html('technical-docs/montage-verification/description'),
        details: html('technical-docs/montage-verification/details'),
        children: [],
      },
      {
        slug: 'sequence',
        title: 'Техническая экспертиза последовательности',
        description: html('technical-docs/sequence/description'),
        details: html('technical-docs/sequence/details'),
        children: [],
      },
    ],
  },
]

const serviceIndex = new Map()

const enrichTree = (nodes, parentSlug = null, level = 0, parentPath = '') =>
  nodes.map((node) => {
    const children = node.children ?? []
    const path = parentPath ? `${parentPath}/${node.slug}` : node.slug
    const enrichedChildren = enrichTree(children, node.slug, level + 1, path)
    const entry = {
      ...node,
      children: enrichedChildren,
      parentSlug,
      level,
      path,
    }
    serviceIndex.set(path, entry)
    return entry
  })

export const services = enrichTree(servicesTree)

export function findService(pathOrSegments) {
  if (!pathOrSegments) {
    return null
  }

  const normalized = Array.isArray(pathOrSegments)
    ? pathOrSegments.filter(Boolean).join('/')
    : String(pathOrSegments).replace(/^\/+|\/+$/g, '')

  if (!normalized) {
    return null
  }

  return serviceIndex.get(normalized) ?? null
}
