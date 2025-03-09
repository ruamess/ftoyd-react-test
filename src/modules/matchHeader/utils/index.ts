export const getStatusColorClass = (status: string): string => {
  const statusMap: Record<string, string> = {
    finished: "bg-rose",
    ongoing: "bg-flame-orange",
    scheduled: "bg-yellow-500",
  }

  return statusMap[status.toLowerCase()] || "bg-lime"
}
