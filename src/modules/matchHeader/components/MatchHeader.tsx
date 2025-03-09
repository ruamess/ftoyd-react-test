import { FC } from "react"
import MatchTitle from "./MatchTitle"
import TeamName from "./TeamName"
import MatchStatus from "./MatchStatus"

export interface CardHeaderProps {
  title: string
  status: string
  awayTeamName: string
  awayScore: number
  homeTeamName: string
  homeScore: number
}

const MatchHeader: FC<CardHeaderProps> = ({
  title,
  status,
  awayTeamName,
  awayScore,
  homeTeamName,
  homeScore,
}) => {
  return (
    <header className="flex flex-col items-center gap-4">
      <MatchTitle title={title} />

      <div className="flex w-full flex-row items-center justify-between pb-2">
        <TeamName name={awayTeamName} />

        <MatchStatus
          homeScore={homeScore}
          awayScore={awayScore}
          status={status}
        />

        <TeamName name={homeTeamName} reverse />
      </div>
    </header>
  )
}

export default MatchHeader
