import { FC, useCallback, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react"
import { DEFAULT_OPTION, useOutsideClick } from "../utils"
import DropdownToggle from "./DropdownToggle"
import DropdownList from "./DropdownList"

interface DropdownProps {
  options: string[]
}

const Dropdown: FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const selected = useMemo(
    () => searchParams.get("status") || DEFAULT_OPTION,
    [searchParams],
  )
  const dropdownOptions = useMemo(() => [DEFAULT_OPTION, ...options], [options])

  const closeDropdown = useCallback(() => setIsOpen(false), [])

  useOutsideClick(dropdownRef, closeDropdown)

  const handleSelect = useCallback(
    (value: string) => {
      setSearchParams(value === DEFAULT_OPTION ? {} : { status: value })
      setIsOpen(false)
    },
    [setSearchParams],
  )

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <LazyMotion features={domAnimation}>
      <m.div ref={dropdownRef} className="relative w-full md:w-96 md:max-w-44">
        <DropdownToggle
          isOpen={isOpen}
          selected={selected}
          toggle={toggleDropdown}
        />

        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 top-full mt-2 w-full rounded-md bg-white shadow-lg"
            >
              <DropdownList
                options={dropdownOptions}
                selected={selected}
                onSelect={handleSelect}
              />
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </LazyMotion>
  )
}

export default Dropdown
