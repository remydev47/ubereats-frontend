import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1}}>
       <View style={{backgroundColor:'#fff', padding: 15}}>
        <HeaderTabs />
       </View>
    </SafeAreaView>
  )
}