import { View , Text, ScrollView } from 'react-native'
import { SafeAreaView  } from 'react-native-safe-area-context'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems from '../components/RestaurantItem'

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee',}}>
       <View style={{  backgroundColor:'#fff', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
       </View>
       <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
       </ScrollView>
    </SafeAreaView>
  )
}