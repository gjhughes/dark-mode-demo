import {useColorScheme as _useColorScheme, ColorSchemeName} from 'react-native'

export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>
}
