export interface IPlayer {
  username: string
  kills: number
}

export interface ITeam {
  name: string
  place: number
  players: IPlayer[]
  points: number
  total_kills: number
}

export interface IMatch {
  title: string
  time: string
  status: string
  homeTeam: ITeam
  awayTeam: ITeam
  homeScore: number
  awayScore: number
}

export interface IMatchCard {
  match: IMatch
}

export type ITeamInfo = Omit<ITeam, "name">
export type ITeamStats = Omit<ITeam, "name" | "players">

export interface IGlobalStore {
  matches: IMatch[]
  loading: boolean
  error: string | null
  ws: WebSocket | null
  setMatches: (newMatches: IMatch[]) => void
  setLoading: (value: boolean) => void
  setError: (value: string | null) => void
  filteredMatches: (statusFilter: string) => IMatch[]
  fetchMatches: () => Promise<void>
  connectWebSocket: () => void
}
