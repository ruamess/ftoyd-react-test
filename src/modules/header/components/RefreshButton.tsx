import { useGlobalStore } from "@shared/store"
import { memo } from "react"

const RefreshButton = () => {
  const loading = useGlobalStore((state) => state.loading)
  const fetchMatches = useGlobalStore((state) => state.fetchMatches)
  return (
    <button
      disabled={loading}
      className="flex h-14 w-full flex-row items-center justify-center gap-3 rounded-md bg-rose hover:bg-refresh-button-hover disabled:bg-refresh-button-inactive md:max-w-52 lg:gap-2"
      onClick={() => fetchMatches()}
    >
      <span className="text-lg font-semibold">Обновить</span>
      <img src="refresh.svg" alt="Refresh" className="w-6 aspect-square" />
    </button>
  )
}

export default memo(RefreshButton)
