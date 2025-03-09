import { FC, memo } from "react"

interface MatchTitleProps {
  title: string
}

const MatchTitle: FC<MatchTitleProps> = ({ title }) => {
  return <span className="text-base font-bold md:text-xl">{title}</span>
}

export default memo(MatchTitle)
