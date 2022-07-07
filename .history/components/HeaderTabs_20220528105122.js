import { View, Text } from 'react-native'
import React from 'react'

export default function HeaderTabs () {
  return (
    <View>
      <HeaderButton />
      <HeaderButton />
    </View>
  )
}

const HeaderButton = () => {
    return(
        <Text>Delivery</Text>
    )
}
