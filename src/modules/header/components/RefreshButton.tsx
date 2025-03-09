import { memo, useRef } from "react"
import { LazyMotion, domAnimation, m } from "motion/react"
import { useGlobalStore } from "@shared/store"

const RefreshButton = () => {
  const loading = useGlobalStore((state) => state.loading)
  const fetchMatches = useGlobalStore((state) => state.fetchMatches)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    fetchMatches()
  }

  return (
    <LazyMotion features={domAnimation}>
      <button
        ref={buttonRef}
        disabled={loading}
        className="group flex h-14 w-full items-center justify-center gap-3 rounded-md bg-rose
          hover:bg-refresh-button-hover disabled:bg-refresh-button-inactive transition-all md:max-w-52"
        onClick={handleClick}
        onTouchStart={(e) => e.currentTarget.classList.remove("hover:bg-refresh-button-hover")}
      >
        <span className="text-lg font-semibold">Обновить</span>
        <m.img
          src="refresh.svg"
          alt="Refresh"
          className="w-6 aspect-square"
          animate={loading ? { rotate: -360 } : { rotate: 0 }}
          transition={loading ? { repeat: Infinity, duration: 1, ease: "linear" } : {}}
        />
      </button>
    </LazyMotion>
  )
}

export default memo(RefreshButton)
