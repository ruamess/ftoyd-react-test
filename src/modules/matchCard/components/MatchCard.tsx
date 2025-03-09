import { FC, useState } from "react"
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react"
import { MatchHeader } from "@modules/matchHeader"
import { IMatchCard } from "@shared/interfaces"
import VSLine from "./VSLine"
import TeamInfo from "./TeamInfo"
import ExpandArrow from "./ExpandArrow"

const MatchCard: FC<IMatchCard> = ({ match }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const { title, status, homeScore, awayScore, homeTeam, awayTeam } = match

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="w-full cursor-pointer rounded-sm bg-ui-item p-2 shadow-md md:p-4"
        whileTap={{ scale: 0.99 }}
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

        <AnimatePresence>
          {isExpanded && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <m.div
                layout
                className="my-4 flex w-full flex-col items-stretch gap-2 md:flex-row md:justify-between md:gap-8"
              >
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
              </m.div>
            </m.div>
          )}
        </AnimatePresence>

        <ExpandArrow isExpanded={isExpanded} />
      </m.div>
    </LazyMotion>
  )
}

export default MatchCard
