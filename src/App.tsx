import React from 'react'

import RootNavigator from "./navigation"
import {AppearanceSettingsProvider} from "./context"

export default function App() {
  return (
    <AppearanceSettingsProvider>
      <RootNavigator />
    </AppearanceSettingsProvider>
  )
}
