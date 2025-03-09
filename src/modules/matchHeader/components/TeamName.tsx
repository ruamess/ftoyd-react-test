import { FC, memo } from "react"

interface TeamNameProps {
  name: string
  reverse?: boolean
}

const TeamName: FC<TeamNameProps> = ({ name, reverse = false }) => {
  const elements = [
    <img
      key="img"
      src="matchCard/teamIcon.svg"
      alt="Team"
      className="w-7 sm:w-8 md:w-10 lg:w-12 aspect-square"
    />,
    <span key="text">{name}</span>,
  ]

  return (
    <div className="flex items-center gap-2 text-center text-sm font-semibold md:text-base">
      {reverse ? elements.reverse() : elements}
    </div>
  )
}

export default memo(TeamName)
