import { FC } from "react"

interface MatchCardsSkeletonProps {
  quantity: number
}

const MatchCardsSkeleton: FC<MatchCardsSkeletonProps> = ({ quantity }) => {
  return (
    <>
      {Array.from({ length: quantity }, (_, index) => (
        <div
          key={index}
          className="h-36 w-full animate-pulse rounded-sm bg-gray-700 shadow-md md:h-40"
        />
      ))}
    </>
  )
}

export default MatchCardsSkeleton
