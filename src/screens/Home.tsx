import React from 'react'
import {View, StyleSheet} from 'react-native'

import {Text} from '../components'
import {HomeStackProps} from '../navigation/types'

interface Props extends HomeStackProps {}

export default function Home(_props: Props) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
