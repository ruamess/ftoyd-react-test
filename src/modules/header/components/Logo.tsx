import { memo } from "react"

const Logo = () => {
  return (
    <img
      src="logo.svg"
      alt="Match Tracker"
      className="h-7 w-56 lg:h-8 lg:w-64"
    />
  )
}

export default memo(Logo)
