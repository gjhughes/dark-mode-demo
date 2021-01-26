import React from 'react'
import {View, FlatList, StyleSheet, Button} from 'react-native'

import Text from './Text'
import {useTheme} from '../hooks'

const data = Array.from({length: 8}).map((_, index) => ({
  id: `lane_item_${index}`
}))

interface Props {
  laneId: string
}

export default function Lane({laneId}: Props) {
  const {colors} = useTheme()

  const renderItem = () => {
    return (
      <View
        style={[{backgroundColor: colors.secondaryBackground}, styles.laneItem]}
      />
    )
  }

  const renderItemSeparator = () => {
    return <View style={styles.divider} />
  }

  const laneTitle = `Lane ${parseInt(laneId.substr(-1)) + 1}`

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={[{color: colors.label}, styles.laneHeaderText]}>
          {laneTitle}
        </Text>
        <Text style={[{color: colors.accent}, styles.viewAllText]}>
          View all
        </Text>
      </View>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 16
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  laneHeaderText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  laneItem: {
    height: 80,
    width: 120,
    borderRadius: 8
  },
  divider: {
    width: 8
  },
  viewAllText: {
    fontWeight: 'bold',
    fontSize: 12
  }
})
