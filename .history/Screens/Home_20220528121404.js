import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee',}}>
       <View style={{ padding: 15}}>
        <HeaderTabs />
        <SearchBar />
       </View>
    </SafeAreaView>
  )
}