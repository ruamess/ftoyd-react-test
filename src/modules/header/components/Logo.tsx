import { memo } from "react"

const Logo = () => {
  return <img src="logo.svg" alt="Match Tracker" className="w-56 h-7 lg:w-64 lg:h-8" />
}

export default memo(Logo)
