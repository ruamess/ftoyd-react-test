import { FC } from "react"
import { DEFAULT_OPTION, getOptionLabel } from "../utils"

interface DropdownToggleProps {
  isOpen: boolean
  selected: string
  toggle: () => void
}

const DropdownToggle: FC<DropdownToggleProps> = ({
  isOpen,
  selected,
  toggle,
}) => (
  <button
    onClick={toggle}
    className={`flex h-14 w-full items-center justify-between rounded-md bg-ui-item px-4 transition-all duration-100 hover:bg-dropdown-hover active:bg-ui-item ${
      selected !== DEFAULT_OPTION ? "text-white" : "text-white/50"
    }`}
  >
    <span>{getOptionLabel(selected)}</span>
    <img
      src="dropdownArrow.svg"
      alt="Arrow"
      className={`aspect-square w-7 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    />
  </button>
)

export default DropdownToggle
