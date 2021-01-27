import React, {
  useMemo,
  useState,
  createContext,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'

import Storage from '../utils/Storage'

export type Appearance = 'light' | 'dark' | 'system'

interface AppearanceContext {
  appearance: Appearance
  setAppearance: Dispatch<SetStateAction<Appearance>>
}

export const AppearanceSettings = createContext({} as AppearanceContext)

interface Props {
  children: React.ReactNode
}

export default function AppearanceSettingsProvider({children}: Props) {
  const [appearance, setAppearance] = useState('system')

  const value = useMemo(() => {
    return {appearance, setAppearance} as AppearanceContext
  }, [appearance])

  useEffect(() => {
    async function getSettingsFromLocalStorage() {
      try {
        const storedSettings = await Storage.getItem('appearanceSettings')
        setAppearance(storedSettings || 'system')
      } catch {
        setAppearance('system')
      }
    }
    getSettingsFromLocalStorage()
  }, [])

  useEffect(() => {
    Storage.setItem('appearanceSettings', appearance)
  }, [appearance])

  return (
    <AppearanceSettings.Provider value={value}>
      {children}
    </AppearanceSettings.Provider>
  )
}
