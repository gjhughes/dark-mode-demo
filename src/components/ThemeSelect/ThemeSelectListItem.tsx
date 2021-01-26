import React from 'react'
import {View, StyleSheet, Pressable} from 'react-native'

import Text from '../Text'
import TickBox from './TickBox'
import ThemeIcon from './ThemeIcon'
import {Appearance} from '../../context'
import {useColorScheme} from '../../hooks'
import {color} from 'react-native-reanimated'

interface Props {
  item: Appearance
  isActive: boolean
  onPress(value: Appearance): void
}

export default function ThemeSelectListItem({isActive, onPress, item}: Props) {
  const colorScheme = useColorScheme()
  const isDark =
    item === 'dark' || (item === 'system' && colorScheme === 'dark')
  const label = item.charAt(0).toUpperCase() + item.slice(1)
  return (
    <Pressable style={styles.container} onPress={() => onPress(item)}>
      <ThemeIcon isDark={isDark} />
      <View style={styles.spacer} />
      <Text>{label}</Text>
      <View style={styles.spacer} />
      <TickBox isActive={isActive} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  spacer: {
    height: 24
  }
})
