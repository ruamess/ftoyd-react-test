import { FC, useCallback, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { DEFAULT_OPTION, useOutsideClick } from "../utils"
import DropdownToggle from "./DropdownToggle"
import DropdownList from "./OptionsList"

interface DropdownProps {
  options: string[]
}

const Dropdown: FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [animateRef] = useAutoAnimate()
  const [searchParams, setSearchParams] = useSearchParams()

  const selected = useMemo(
    () => searchParams.get("status") || DEFAULT_OPTION,
    [searchParams],
  )
  const dropdownOptions = useMemo(() => [DEFAULT_OPTION, ...options], [options])

  const closeDropdown = useCallback(() => {
    setIsOpen(false)
  }, [])

  useOutsideClick(dropdownRef, closeDropdown)

  const handleSelect = useCallback(
    (value: string) => {
      setSearchParams(value === DEFAULT_OPTION ? {} : { status: value })
      setIsOpen(false)
    },
    [setSearchParams],
  )

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div ref={dropdownRef} className="relative w-full md:w-96 md:max-w-44">
      <DropdownToggle
        isOpen={isOpen}
        selected={selected}
        toggle={toggleDropdown}
      />
      <div ref={animateRef}>
        {isOpen && (
          <DropdownList
            options={dropdownOptions}
            selected={selected}
            onSelect={handleSelect}
          />
        )}
      </div>
    </div>
  )
}

export default Dropdown
