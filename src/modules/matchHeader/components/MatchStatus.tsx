import { FC } from "react"
import { getStatusColorClass } from "../utils"
import { motion } from "framer-motion"

interface MatchStatusProps {
  homeScore: number
  awayScore: number
  status: string
}

const MatchStatus: FC<MatchStatusProps> = ({
  homeScore,
  awayScore,
  status,
}) => {
  return (
    <div className="flex flex-col gap-1 text-center">
      <motion.span
        key={`${homeScore}-${awayScore}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-lg font-semibold"
      >
        {homeScore}:{awayScore}
      </motion.span>
      <span
        className={`rounded-sm px-2 py-1 text-xs md:px-6 ${getStatusColorClass(status)}`}
      >
        {status}
      </span>
    </div>
  )
}

export default MatchStatus
