import { FC, useState } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { IMatchCard } from "@shared/interfaces"
import { MatchHeader } from "@modules/matchHeader"
import VSLine from "./VSLine"
import TeamInfo from "./TeamInfo"
import ExpandArrow from "./ExpandArrow"

const MatchCard: FC<IMatchCard> = ({ match }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [autoAnimateRef] = useAutoAnimate()

  const { title, status, homeScore, awayScore, homeTeam, awayTeam } = match

  return (
    <div
      className="w-full cursor-pointer rounded-sm bg-ui-item p-2 shadow-md md:p-4"
      onClick={() => setIsExpanded((prev) => !prev)}
    >
      <MatchHeader
        title={title}
        status={status}
        homeScore={homeScore}
        homeTeamName={homeTeam.name}
        awayScore={awayScore}
        awayTeamName={awayTeam.name}
      />

      <div ref={autoAnimateRef}>
        {isExpanded && (
          <div className="my-4 flex w-full flex-col items-stretch gap-2 md:flex-row md:justify-between md:gap-8">
            <TeamInfo
              players={homeTeam.players}
              place={homeTeam.place}
              points={homeTeam.points}
              total_kills={homeTeam.total_kills}
            />

            <VSLine />

            <TeamInfo
              players={awayTeam.players}
              place={awayTeam.place}
              points={awayTeam.points}
              total_kills={awayTeam.total_kills}
            />
          </div>
        )}
      </div>

      <ExpandArrow isExpanded={isExpanded} />
    </div>
  )
}

export default MatchCard
