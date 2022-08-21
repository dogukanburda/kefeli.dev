export const ogImageUrl = (title) =>
  `https://kefeli.dev`

export const isExternalLink = (href) => {
  if (!href) return false
  return !href.startsWith('/') && !href.startsWith('#')
}

export const fetcher = (url) => fetch(url).then((res) => res.json())
