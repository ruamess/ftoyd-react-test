import { create } from "zustand"
import axios from "axios"
import { IGlobalStore } from "./interfaces"
import ENV from "../../env.json"

const API_URL = `https://${ENV.API_URL || ""}/fronttemp`
const WS_URL = `wss://${ENV.API_URL || ""}/ws`
const RECONNECT_INTERVAL = 5000
const FETCH_ERROR_MESSAGE = "не удалось загрузить информацию"
const WS_ERROR_MESSAGE = "не удалось подключиться к серверу"

export const useGlobalStore = create<IGlobalStore>((set, get) => ({
  matches: [],
  loading: false,
  error: null,
  ws: null,

  setMatches: (matches) => set({ matches }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  filteredMatches: (statusFilter) => {
    const { matches } = get()
    return statusFilter === "All"
      ? matches
      : matches.filter((match) => match.status === statusFilter)
  },

  fetchMatches: async () => {
    const { setMatches, setLoading, setError, ws, connectWebSocket } = get()

    setLoading(true)

    if (ws?.readyState === WebSocket.OPEN) {
      ws.close()
      await new Promise((resolve) => (ws.onclose = resolve))
      set({ ws: null })
    }

    try {
      const { data } = await axios.get(API_URL)
      const matches = data?.data?.matches || []

      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (!matches.length) {
        setError(FETCH_ERROR_MESSAGE)
      } else {
        setMatches(matches)
        setTimeout(() => connectWebSocket(), 500)
      }
    } catch {
      setError(FETCH_ERROR_MESSAGE)
    } finally {
      setLoading(false)
    }
  },

  connectWebSocket: () => {
    const { setMatches, setError, ws } = get()

    if (ws?.readyState === WebSocket.OPEN || ws?.readyState === WebSocket.CONNECTING) return

    try {
      const newWs = new WebSocket(WS_URL)

      newWs.onopen = () => setError(null)

      newWs.onmessage = (event) => {
        try {
          const { type, data } = JSON.parse(event.data)
          if (type === "update_matches") setMatches(data)
        } catch {
          setError(WS_ERROR_MESSAGE)
        }
      }

      newWs.onerror = () => {
        setError(WS_ERROR_MESSAGE)
        setTimeout(() => get().connectWebSocket(), RECONNECT_INTERVAL)
      }

      newWs.onclose = (event) => {
        set({ ws: null })
        if (!event.wasClean) {
          setTimeout(() => get().connectWebSocket(), RECONNECT_INTERVAL)
        }
      }

      set({ ws: newWs })
    } catch {
      setError("Ошибка WebSocket: сервер недоступен")
    }
  }
}))
