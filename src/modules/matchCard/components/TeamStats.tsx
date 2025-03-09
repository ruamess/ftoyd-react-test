import { FC } from "react"
import { getFormattedPoints } from "../utils"
import { ITeamStats } from "@shared/interfaces"

const TeamStats: FC<ITeamStats> = ({ points, place, total_kills }) => {
  return (
    <div className="grid w-full grid-cols-[1fr_auto_1fr_auto_1fr] items-center rounded-sm bg-card-item py-4">
      <span className="text-center text-sm">
        <span className="text-xs text-white/40">Points:</span>{" "}
        {getFormattedPoints(points)}
      </span>

      <div className="h-5 w-[1px] bg-[#141A21]" />

      <span className="text-center text-sm">
        <span className="text-xs text-white/40">Место:</span> {place}
      </span>

      <div className="h-5 w-[1px] bg-[#141A21]" />

      <span className="text-center text-sm">
        <span className="text-xs text-white/40">Всего убийств:</span>{" "}
        {total_kills}
      </span>
    </div>
  )
}

export default TeamStats
