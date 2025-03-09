import { useEffect, useState } from "react"
import { useGlobalStore } from "@shared/store"

type AlertStage = "init" | "appeared" | "closing"

const APPEAR_DELAY = 10
const VISIBLE_DURATION = 3000
const CLEAR_DELAY = 500

const ErrorAlert = () => {
  const { error, setError } = useGlobalStore()
  const [stage, setStage] = useState<AlertStage>("init")

  useEffect(() => {
    if (!error) return

    setStage("init")
    const appearTimer = setTimeout(() => setStage("appeared"), APPEAR_DELAY)
    const visibleTimer = setTimeout(() => setStage("closing"), VISIBLE_DURATION)
    const clearTimer = setTimeout(
      () => setError(null),
      VISIBLE_DURATION + CLEAR_DELAY,
    )

    return () => {
      clearTimeout(appearTimer)
      clearTimeout(visibleTimer)
      clearTimeout(clearTimer)
    }
  }, [error, setError])

  if (!error) return null

  const animationClass =
    stage === "init"
      ? "opacity-0 translate-y-4"
      : stage === "appeared"
        ? "animate-alert-appear"
        : "animate-alert-disappear"

  return (
    <div
      className={`absolute z-10 mx-4 flex h-14 w-fit items-center justify-center gap-2 rounded-md bg-card-item px-6 ${animationClass}`}
    >
      <img src="warningAlert.svg" alt="Warning" className="w-7 aspect-square" />
      <span className="text-center text-sm md:text-lg">Ошибка: {error}</span>
    </div>
  )
}

export default ErrorAlert
