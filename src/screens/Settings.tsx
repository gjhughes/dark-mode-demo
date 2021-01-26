import React from "react"
import {View, StyleSheet} from "react-native"

import {ThemeSelect} from "../components"
import {SettingsStackProps} from "../navigation/types"

interface Props extends SettingsStackProps {}

export default function Settings(_props: Props) {
  return (
    <View style={styles.container}>
      <ThemeSelect />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24
  }
})
