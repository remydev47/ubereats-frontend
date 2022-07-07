import { View , Text, ScrollView } from 'react-native'
import { SafeAreaView  } from 'react-native-safe-area-context'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {

    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);



  return (
    <SafeAreaView style={{ backgroundColor: '#eee',}}>
       <View style={{  backgroundColor:'#fff', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
       </View>
       <ScrollView  showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
       </ScrollView>
    </SafeAreaView>
  )
}