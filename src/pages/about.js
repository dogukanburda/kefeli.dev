// --- Components
import { Suspense } from 'react'

import PageTitle from 'components/PageTitle'
import NextImage from 'next/image'
import Link from 'components/Link'

// --- Others
import { profiles } from 'lib/constants'


export default function About() {
  return (
    <>
      <Suspense fallback={null}>
        <PageTitle title="About Me" />
        <div className="mb-12">
          <div className="float-left mt-3 mr-4" style={{ shapeOutside: 'circle(55%)' }}>
            <NextImage
              className="rounded-full overflow-hidden"
              width={140}
              height={140}
              src="/images/me2.jpg"
              alt="Dogukan Kefeli"
            />
          </div>
          <div className="space-y-6">
            <p>
              My name is Dogukan. I'm a{' '}
              <Link href={profiles.linkedin.url}>Computer Vision Engineer</Link> 
            </p>
            <p>
              I'm currently living in Istanbul, Turkey
            </p>
            <p>
              I was born in Antalya, went to high school in Izmir and graduated Istanbul Technical University with a degree in Physics Engineering.
            </p>
            <p>
            You can check out my  <Link href={profiles.cv.url}>CV Here.</Link>
            </p>
          </div>
        </div>
      </Suspense>
    </>
  )
}