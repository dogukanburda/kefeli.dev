// --- Components
import { Suspense } from 'react'

import PageTitle from 'components/PageTitle'
import SetMeeting from 'components/Meet'
import Footer from 'components/Footer'
// --- Others


export default function About() {
  return (
    <>
      <Suspense fallback={null}>
      <PageTitle title="Schedule a Meeting" />
      <div class="max-h-screen">
        <div class="sticky top-[40vh]">
          <p>
            You can schedule a meeting below to talk about deep learning, IoT or physics maybe? idk
          </p>
          <SetMeeting/>
        </div>
      </div>
      <Footer />
      </Suspense>
    </>
  )
}
