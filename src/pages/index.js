import { Suspense } from 'react'

// --- Components
import Card from 'components/Card'
import SectionBlock from 'components/SectionBlock'
import Link from 'components/Link'
import PageTitle from 'components/PageTitle'

// --- Others
import { getLast3Posts } from 'lib/contentful'
import { dateTemplate, mixtapes, projects, profiles, posts } from 'lib/constants'

export default function Home({ }) {
  return (
    <Suspense fallback={null}>
      <PageTitle
        title={
          <>
            <span role="img" aria-label="Waving Hand" className="mr-4">
              👋🏼
            </span>
            Dogukan's home on the internet
          </>
        }
      />
      <p>
        Born in 1999, Antalya, Turkey. I am a physics major, <Link href={profiles.linkedin.url}>computer vision engineer</Link>, {' '}
        <Link href={"https://instagram.com/ituhornets"}> football player</Link>,{' '}
        and a stoic. 
        Living in Istanbul and I love finding ways to implement cutting edge technology at <Link href="https://stroma.io">Stroma</Link>.
      </p>
      <div className="flex flex-col gap-y-8 mt-12">
        <SectionBlock title="Recent Posts" url={"/writing"}>
          {posts.slice(0, 3).map((post) => {
            const { title, date, url } = post
            return <Card key={`post_${title}`} title={title} subtitle={<time dateTime={date}>{dateTemplate.render(new Date(date))}</time>} url={url} />
          })}
        </SectionBlock>

        {/* <SectionBlock title="Popular Mixtapes" url={profiles.soundcloud.url}>
          {mixtapes.map((mixtape) => {
            const { title, description, url } = mixtape
            return <Card key={`mixtape_${url}`} title={title} subtitle={description} url={url} />
          })}
        </SectionBlock> */}

        <SectionBlock title="Some Projects" url={profiles.github.url}>
          {projects.map((project) => {
            const { title, description, url } = project
            return <Card key={`project_${url}`} title={title} subtitle={description} url={url} />
          })}
        </SectionBlock>
      </div>
    </Suspense>
  )
}

export async function getStaticProps({ preview = false }) {
  const recentPosts = (await getLast3Posts(preview)) ?? []

  return {
    props: { recentPosts, headerTitle: 'Home' }
  }
}
