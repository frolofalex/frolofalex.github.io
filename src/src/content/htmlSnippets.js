const rawSnippets = import.meta.glob('./services/**/*.html', { eager: true, as: 'raw' })

const normalizeKey = (path) =>
  path
    .replace(/^\.\//, '')
    .replace(/\.html$/, '')

const snippets = Object.entries(rawSnippets).reduce((acc, [path, content]) => {
  const key = normalizeKey(path)
  acc[key] = typeof content === 'string' ? content : content?.default ?? ''
  return acc
}, {})

export function getHtmlSnippet(key) {
  const normalized = key.replace(/^\.\//, '').replace(/\.html$/, '')
  const namespaced = normalized.startsWith('services/') ? normalized : `services/${normalized}`
  return snippets[namespaced] ?? ''
}

export function getHtmlCollection(prefix) {
  const normalizedPrefix = prefix.replace(/\/+$|^\.\//g, '').replace(/\.html$/, '')
  const namespacedPrefix = normalizedPrefix.startsWith('services/') ? normalizedPrefix : `services/${normalizedPrefix}`
  const directMatch = snippets[namespacedPrefix]
  if (directMatch) {
    return [directMatch]
  }
  return Object.entries(snippets)
    .filter(([key]) => key.startsWith(`${namespacedPrefix}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, value]) => value)
}
