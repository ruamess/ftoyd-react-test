import { FC, memo } from "react"

interface IExpandArrow {
  isExpanded: boolean
}

const ExpandArrow: FC<IExpandArrow> = ({ isExpanded }) => {
  return (
    <img
      src="matchCard/openInfoArrow.svg"
      alt="Arrow"
      className={`mx-auto h-7 w-7 transform transition-transform duration-300 ${isExpanded && "rotate-180"}`}
    />
  )
}

export default memo(ExpandArrow)
