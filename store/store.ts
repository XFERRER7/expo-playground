import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type BearStore = {
  bears: number
  selectedRow: string
  addABear: () => void
  setSelectedRow: (row: string) => void
}

export const useBearStore = create<BearStore>()(
  persist(
    (set, get) => ({
      bears: 0,
      selectedRow: '',
      addABear: () => set({ bears: get().bears + 1 }),
      setSelectedRow: (row: string) => set({ selectedRow: row }),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
