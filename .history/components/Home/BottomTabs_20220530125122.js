import { View, Text } from 'react-native'
import React from 'react'

export default function BottomTabs() {
  return (
    <View style={{flexDirection: 'row', margin: 10, marginHorizontal: 30, justifyContent: 'space-between'}}>
       {/* <Icon name='home' text='Home' /> */}
      <Text>BottomTabs</Text>
    </View>
  )
}

const Icon = () => {
  return(
    <FontAwesome5 name='home' text='Home' style={{ marginBottom: 3, alignItem: "center"}} />
  )
}