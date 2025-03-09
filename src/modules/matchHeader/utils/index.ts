export const getStatusColorClass = (status: string): string => {
  const statusMap: Record<string, string> = {
    finished: "bg-rose",
    ongoing: "bg-lime",
    scheduled: "bg-flame-orange",
  }

  return statusMap[status.toLowerCase()] || "bg-yellow-500"
}
