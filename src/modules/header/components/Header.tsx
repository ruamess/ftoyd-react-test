import { Dropdown } from "@modules/dropdown"
import RefreshButton from "./RefreshButton"
import Logo from "./Logo"

const Header = () => {
  const options = ["Live", "Finished", "Ongoing", "Scheduled"]

  return (
    <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:gap-3">
      <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
        <Logo />
        <Dropdown options={options} />
      </div>

      <RefreshButton />
    </div>
  )
}

export default Header
