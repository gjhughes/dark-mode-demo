import {DefaultTheme, DarkTheme} from "@react-navigation/native"

import useColorScheme from "./useColorScheme"
import useAppearanceSettings from "./useAppearanceSettings"
import {DARK_THEME, LIGHT_THEME} from "../theme"

enum BarStyle {
  Light = "light-content",
  Dark = "dark-content"
}

const dark = {
  colors: DARK_THEME,
  navigationTheme: DarkTheme,
  barStyle: BarStyle.Light
}

const light = {
  colors: LIGHT_THEME,
  navigationTheme: DefaultTheme,
  barStyle: BarStyle.Dark
}

export default function useTheme() {
  let theme = useColorScheme()
  const {appearance} = useAppearanceSettings()

  if (appearance !== "system") {
    theme = appearance
  }

  return theme === "dark" ? dark : light
}
