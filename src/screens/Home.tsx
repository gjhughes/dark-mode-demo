import React, {useRef} from 'react'
import {View, FlatList, StyleSheet, ListRenderItemInfo} from 'react-native'
import {useScrollToTop} from '@react-navigation/native'

import {Tile, Lane} from '../components'
import {HomeStackProps} from '../navigation/types'

interface Props extends HomeStackProps {}

const data = Array.from({length: 5}).map((_, i) => ({
  id: `id_lane_${i}`
}))

export default function Home(_props: Props) {
  const scrollRef = useRef<FlatList>(null)

  useScrollToTop(scrollRef)

  const renderListHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Tile />
      </View>
    )
  }

  const renderItem = ({item}: ListRenderItemInfo<{id: string}>) => {
    return <Lane laneId={item.id} />
  }

  const renderItemSeparator = () => {
    return <View style={styles.divider} />
  }

  return (
    <FlatList
      data={data}
      ref={scrollRef}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={renderListHeader}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={renderItemSeparator}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24
  },
  divider: {
    height: 24
  }
})
