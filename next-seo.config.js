import { profiles } from 'lib/constants'
import { ogImageUrl } from 'lib/helper'

const title = 'Dogukan Kefeli'
const description = 'Computer Vision Engineer.'
const url = 'https://kefeli.dev'
const twitterUsername = `@${profiles.twitter.username}`

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    url,
    title,
    description,
    type: 'website',
    locale: 'en_IE',
    images: [
      {
        url: ogImageUrl(title),
        alt: title,
        width: 1024,
        height: 1024,
        type: 'image/png'
      }
    ],
    site_name: title
  },
  twitter: {
    handle: twitterUsername,
    site: twitterUsername,
    cardType: 'summary_large_image'
  }
}

export default SEO
