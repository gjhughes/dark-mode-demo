import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'

import ThemeSelectListItem from './ThemeSelectListItem'
import {useTheme, useAppearanceSettings} from '../../hooks'
import {Appearance} from '../../context'

import Text from '../Text'

const options: Appearance[] = ['light', 'dark', 'system']

export default function ThemeSelect() {
  const {appearance, setAppearance} = useAppearanceSettings()
  const {colors} = useTheme()
  return (
    <View>
      <Text>Appearance</Text>
      <View
        style={[
          {backgroundColor: colors.secondaryBackground},
          styles.container
        ]}>
        {options.map((option) => {
          return (
            <ThemeSelectListItem
              key={option}
              item={option}
              isActive={option === appearance}
              onPress={setAppearance}
            />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 24,
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-around'
  }
})
