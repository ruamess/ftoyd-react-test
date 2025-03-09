import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useGlobalStore } from "@shared/store"
import Alert from "@components/ErrorAlert"
import { MatchCard } from "@modules/matchCard"
import { Header } from "@modules/header"
import MatchCardsSkeleton from "@components/MatchCardsSkeleton"
import MatchCardsNotFound from "@components/MatchCardsNotFound"

const App = () => {
  const { fetchMatches, filteredMatches, loading } = useGlobalStore()
  const [searchParams] = useSearchParams()
  const statusFilter = searchParams.get("status") || "All"

  useEffect(() => {
    fetchMatches()
  }, [fetchMatches])

  const matches = filteredMatches(statusFilter)

  return (
    <div className="flex min-h-screen flex-col items-center gap-8 px-4 py-8 md:gap-5">
      <Alert />
      <Header />
      <div className="flex w-full flex-col gap-2 md:gap-3">
        {loading ? (
          <MatchCardsSkeleton quantity={4} />
        ) : matches.length > 0 ? (
          matches.map((match) => <MatchCard key={match.title} match={match} />)
        ) : (
          <MatchCardsNotFound />
        )}
      </div>
    </div>
  )
}

export default App
