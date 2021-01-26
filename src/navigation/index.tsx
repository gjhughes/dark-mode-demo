import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import Tabs from './Tabs'
import {useTheme} from '../hooks'

export default function Navigator() {
  const {navigationTheme, barStyle} = useTheme()
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tabs />
      <StatusBar barStyle={barStyle} />
    </NavigationContainer>
  )
}
