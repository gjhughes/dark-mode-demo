import React from "react"
import {View, ViewProps, StyleSheet} from "react-native"

import {useTheme} from "../hooks"

interface Props extends ViewProps {
  children: React.ReactElement
}

export default function Tile({children, style}: Props) {
  const {colors} = useTheme()
  return (
    <View style={[{backgroundColor: colors.secondaryBackground}, styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 16
  }
})
