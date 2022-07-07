import { View, Text } from 'react-native'
import { SafeAreaView as View } from 'react-native-safe-area-context'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <View style={{ backgroundColor: '#eee',}}>
       <View style={{  backgroundColor:'#fff', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
       </View>
    </View>
  )
}