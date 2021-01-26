import React from 'react'
import {View, StyleSheet} from 'react-native'

import {DARK_THEME, LIGHT_THEME} from '../../theme'

interface Props {
  isDark: boolean
}

export default function ThemeIcon({isDark}: Props) {
  const theme = isDark ? DARK_THEME : LIGHT_THEME
  return (
    <View style={[{backgroundColor: theme.background}, styles.container]}>
      <View style={[{backgroundColor: theme.primaryGray}, styles.pill]} />
      <View
        style={[{backgroundColor: theme.secondaryBackground}, styles.tile]}
      />
      <View style={styles.row}>
        {Array.from({length: 3}).map((_, i) => {
          return (
            <View
              key={i}
              style={[{backgroundColor: theme.secondaryGray}, styles.smallPill]}
            />
          )
        })}
      </View>
      <View
        style={[{backgroundColor: theme.secondaryBackground}, styles.tile]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 84,
    width: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    paddingTop: 8,
    paddingHorizontal: 4
  },
  pill: {
    height: 4,
    width: 14,
    borderRadius: 8
  },
  row: {
    marginTop: 4,
    flexDirection: 'row'
  },
  tile: {
    height: 20,
    width: '100%',
    borderRadius: 4,
    marginTop: 4
  },
  smallPill: {
    height: 4,
    width: 6,
    marginRight: 4,
    borderRadius: 4
  }
})
