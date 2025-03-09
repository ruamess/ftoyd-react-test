import { FC } from "react"
import { getOptionLabel } from "../utils"

interface DropdownListProps {
  options: string[]
  selected: string
  onSelect: (value: string) => void
}

const DropdownList: FC<DropdownListProps> = ({
  options,
  selected,
  onSelect,
}) => (
  <ul className="absolute z-10 w-full overflow-hidden rounded-b-md bg-ui-item shadow-md">
    {options.map((opt) => (
      <li
        key={opt}
        onClick={() => onSelect(opt)}
        className={`cursor-pointer px-4 py-3 transition-all ${selected === opt ? "bg-white/20 text-white" : "hover:bg-white/10"
          }`}
      >
        {getOptionLabel(opt)}
      </li>
    ))}
  </ul>
)

export default DropdownList
