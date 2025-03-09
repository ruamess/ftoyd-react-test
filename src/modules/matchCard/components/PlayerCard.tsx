import { FC } from "react"
import { IPlayer } from "@shared/interfaces"

const PlayerCard: FC<IPlayer> = ({ kills, username }) => {
  return (
    <div className="flex flex-col items-center gap-1 rounded-sm bg-card-item px-3 py-2 lg:flex-row lg:justify-between">
      <div className="flex min-w-0 flex-row items-center gap-2">
        <img
          src="matchCard/playerAvatar.png"
          alt="Avatar"
          className="aspect-square w-8 shrink-0 lg:w-10"
        />
        <span className="max-w-[150px] overflow-hidden truncate text-ellipsis whitespace-nowrap md:max-w-[200px]">
          {username}
        </span>
      </div>
      <span className="text-center text-sm">
        <span className="truncate text-xs text-white/40">Убийств:</span> {kills}
      </span>
    </div>
  )
}

export default PlayerCard
