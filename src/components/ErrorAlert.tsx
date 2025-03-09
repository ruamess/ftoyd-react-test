import { useEffect, useState } from "react"
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react"
import { useGlobalStore } from "@shared/store"

const VISIBLE_DURATION = 3000

const ErrorAlert = () => {
  const { error, setError } = useGlobalStore()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!error) return

    setIsVisible(true)
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => setError(null), 500)
    }, VISIBLE_DURATION)

    return () => clearTimeout(timer)
  }, [error, setError])

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isVisible && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute z-10 mx-4 flex h-14 w-fit items-center justify-center gap-2 rounded-md bg-card-item px-6 shadow-lg"
          >
            <img
              src="warningAlert.svg"
              alt="Warning"
              className="aspect-square w-7"
            />
            <span className="text-center text-sm md:text-lg">
              Ошибка: {error}
            </span>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}

export default ErrorAlert
