import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'

const PageLayout = ({ children, ...rest }) => {
  const uniqueId = uuid()

  return (
    <main className="flex-1 pb-16 pt-32 overflow-hidden px-safe" {...rest}>
      <div className="px-4 md:px-16 mx-auto max-w-screen-md">
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            key={uniqueId}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            // transition={{ duration: 0.3, ease: [0.175, 0.85, 0.42, 0.96] }}
          >
            <>{children}</>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}

export default PageLayout
