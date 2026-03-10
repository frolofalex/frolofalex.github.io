import { getHtmlSnippet } from '../content/htmlSnippets.js'

const html = (key) => getHtmlSnippet(`services/${key}`)

// Home page will pick one random entry from this list.
export const homePromo = [
  {
    title: 'Спецпредложение',
    price: 'от 15 000 ₽',
    description: 'Подпись + ее расшифровка. При большом количестве объектов – дополнительные скидки и особые условия. Есть возможность присутствовать при производстве экспертизы.',
    backgroundImage: null,
  },
]

// `promo` may be a single object or an array of promo objects; the Service page will pick a random entry.
const servicesTree = [
  {
    slug: 'consultation',
    title: 'Консультация',
    description: html('consultation/description'),
    details: html('consultation/details'),
    prices: [1, 2, 3, 4],
    promo: {
      title: 'Экспресс-оценка',
      price: '',
      description: 'Оценим достаточность объектов, пригодность для экспертизы, сформулируем вероятный (предварительный) вывод. слуга выездной консультации: приедем и проконсультируем у Вас в офисе.',
      backgroundImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80',
    },
    children: [],
  },
  {
    slug: 'signature',
    title: 'Экспертиза подписи',
    description: html('signature/description'),
    details: html('signature/details'),
    prices: [1, 2, 3, 4, 5, 6, 11, 12],
    children: [],
  },
  {
    slug: 'handwriting',
    title: 'Почерковедческая экспертиза',
    description: html('handwriting/description'),
    details: html('handwriting/details'),
    prices: [1, 2, 3, 4, 9, 10, 11, 12],
    children: [],
  },
  {
    slug: 'review',
    title: 'Рецензирование заключений',
    description: html('review/description'),
    details: html('review/details'),
    prices: [1, 2, 3, 7, 8],
    children: [],
  },
  {
    slug: 'court',
    title: 'Судебная и досудебная экспертизы',
    description: html('court/description'),
    details: html('court/details'),
    prices: [1, 2, 3, 4, 5, 6, 12, 13, 14],
    children: [],
  },
  {
    slug: 'technical-docs',
    title: 'Техническая экспертиза документов',
    description: html('technical-docs/description'),
    details: html('technical-docs/details'),
    prices: [1, 2, 3, 4, 13, 14, 20, 15, 16, 17, 18, 19],
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
        prices: [1, 2, 3, 4, 13, 14, 18],
        children: [],
      },
      {
        slug: 'montage-verification',
        title: 'Техническая экспертиза монтажа',
        description: html('technical-docs/montage-verification/description'),
        details: html('technical-docs/montage-verification/details'),
        prices: [1, 2, 3, 4, 20, 15, 18],
        children: [],
      },
      {
        slug: 'sequence',
        title: 'Техническая экспертиза последовательности',
        description: html('technical-docs/sequence/description'),
        details: html('technical-docs/sequence/details'),
        prices: [1, 2, 3, 4, 16, 17, 18],
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
