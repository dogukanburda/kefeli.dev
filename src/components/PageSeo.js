import { NextSeo } from 'next-seo'

// --- Others
import { ogImageUrl } from 'lib/helper'

const PageSeo = ({ title, url, seoTitle, seoDescription }) => {
  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      canonical={`https://kefeli.dev/${url}`}
      openGraph={{
        url: `https://kefeli.dev/${url}`,
        title: seoTitle,
        description: seoDescription,
        images: [
          {
            url: ogImageUrl(title),
            alt: title,
            type: 'image/jpeg'
          }
        ]
      }}
    />
  )
}

export default PageSeo
