import { memo } from "react"

const Logo = () => {
  return <img src="logo.svg" alt="Match Tracker" className="w-56 lg:w-64" />
}

export default memo(Logo)
