import { FC } from "react"
import { IPlayer, ITeamInfo } from "@shared/interfaces"
import PlayerCard from "./PlayerCard"
import TeamStats from "./TeamStats"

const TeamInfo: FC<ITeamInfo> = ({ players, place, points, total_kills }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="grid w-full grid-cols-3 gap-2">
        {players.map((player: IPlayer) => (
          <PlayerCard
            key={player.username}
            username={player.username}
            kills={player.kills}
          />
        ))}
      </div>

      <TeamStats place={place} points={points} total_kills={total_kills} />
    </div>
  )
}

export default TeamInfo
