import { useEffect, RefObject } from "react"

export const DEFAULT_OPTION = "all"

export const getOptionLabel = (option: string): string =>
  option === DEFAULT_OPTION ? "Все статусы" : option

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, callback])
}
