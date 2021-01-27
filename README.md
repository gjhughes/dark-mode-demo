# dark-mode-demo

| Light / System               | Dark                        |
| ---------------------------- | --------------------------- |
| ![light](./assets/light.png) | ![light](./assets/dark.png) |

## AppearanceSettingsProvider

```tsx
type Appearance = 'light' | 'dark' | 'system'

interface AppearanceContext {
  appearance: Appearance
  setAppearance: Dispatch<SetStateAction<Appearance>>
}

const AppearanceSettings = createContext({} as AppearanceContext)

function AppearanceSettingsProvider({children}: Props) {
  const [appearance, setAppearance] = useState('system')

  const value = useMemo(() => {
    return {appearance, setAppearance} as AppearanceContext
  }, [appearance])

  useEffect(() => {
    async function getSettingsFromLocalStorage() {
      const storedSettings = await Storage.getItem('appearanceSettings')
      if (storedSettings !== null) {
        setAppearance(storedSettings)
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
```

## useTheme

```tsx
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

function useTheme() {
  let theme = useColorScheme()
  const {appearance} = useAppearanceSettings()

  if (appearance !== 'system') {
    theme = appearance
  }

  return theme === 'dark' ? dark : light
}

function Text({children, style, ...props}: Props) {
  const {colors} = useTheme()
  return (
    <RNText style={[{color: colors.label}, style]} {...props}>
      {children}
    </RNText>
  )
}

function Navigator() {
  const {navigationTheme, barStyle} = useTheme()
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tabs />
      <StatusBar barStyle={barStyle} />
    </NavigationContainer>
  )
}
```
