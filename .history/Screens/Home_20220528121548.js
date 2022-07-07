import { View as SafeAreaView, Text } from 'react-native'
import { SafeAreaView  } from 'react-native-safe-area-context'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee',}}>
       <SafeAreaView style={{  backgroundColor:'#fff', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
       </SafeAreaView>
    </SafeAreaView>
  )
}