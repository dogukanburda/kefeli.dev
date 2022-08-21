import { NextSeo, ArticleJsonLd } from 'next-seo'

// --- Others
import { ogImageUrl } from 'lib/helper'

const WritingSeo = ({ title, description, publishedAt, updatedAt, url }) => {
  const publishedDate = new Date(publishedAt).toISOString()
  const featuredImage = {
    url: ogImageUrl(title),
    alt: title
  }

  return (
    <>
      <NextSeo
        title={`${title} — Dogukan Kefeli`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedDate
          },
          url,
          title: `${title} — Dogukan Kefeli`,
          description: description,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        url={url}
        title={title}
        images={[featuredImage]}
        datePublished={publishedDate}
        {...(updatedAt && {
          dateModified: new Date(updatedAt).toISOString()
        })}
        authorName="Dogukan Kefeli"
        description={description}
        publisherName="Dogukan Kefeli"
        publisherLogo="/images/me.png"
      />
    </>
  )
}

export default WritingSeo
