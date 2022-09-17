// --- Components
import { Suspense } from 'react'

import PageTitle from 'components/PageTitle'
import NextImage from 'next/image'
import Link from 'components/Link'
import Footer from 'components/Footer'
// --- Others
import { profiles } from 'lib/constants'


export default function About() {
  return (
    <>
      <Suspense fallback={null}>
      <PageTitle title="About Me" />
      <div class="min-h-screen">
        <div className="mb-12 ">
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
              <Link href={profiles.linkedin.url}>Computer Vision Engineer</Link>.
              Building bunch of things from tools for data management to AI model training platforms suitable for edge deployments.
            </p>
            <p>
              I'm currently living in Istanbul, Turkey. I was born in Antalya, went to high school in Izmir and graduated Istanbul Technical University with a degree in Physics Engineering.
            </p>
            <p>
            You can check out my  <Link href={profiles.cv.url}>CV Here.</Link>
            </p>
          </div>
        </div>
        <div class="sticky top-[80vh]">
          <PageTitle title="Contact Me" />
          <p>
            You can also schedule a <Link href={'/meet'}>meeting </Link> to talk with me about deep learning, IoT or physics maybe? idk  
          </p>
        </div>
      </div>
      <Footer />
      </Suspense>
    </>
  )
}
