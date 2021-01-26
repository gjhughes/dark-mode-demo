import React from 'react'
import {View} from 'react-native'
import {Feather} from '@expo/vector-icons'

import {useTheme} from '../../hooks'

interface Props {
  isActive: boolean
}

export default function TickBox({isActive}: Props) {
  const {colors} = useTheme()
  const name = isActive ? 'check-circle' : 'circle'
  const color = isActive ? colors.accent : colors.primaryGray
  return (
    <View>
      <Feather name={name} color={color} size={24} />
    </View>
  )
}
