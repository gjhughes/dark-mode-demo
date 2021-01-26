import {useContext} from "react"

import {AppearanceSettings} from "../context/AppearanceSettings"

export default function useAppearanceSettings() {
  const context = useContext(AppearanceSettings)

  if (!context) {
    throw new Error('useAppearanceSettings must be used within AppearanceSettingsProvider')
  }

  return context
}
