import { View , Text } from 'react-native'
import { SafeAreaView  } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-elements'
import React, { useEffect } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'
import BottomTabs from '../components/BottomTabs'

export default function Home() {
  const [activeTab, setActiveTab] = React.useState('Delivery');

    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  

  return (
    <SafeAreaView style={{ backgroundColor: '#eee',}}>
       <View style={{  backgroundColor:'#fff', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar  />
       </View>
     <ScrollView  >  
        <View>
          <Categories /> 
          <RestaurantItems restaurantData={restaurantData} />  
        </View>
      </ScrollView>  
     <Divider width={1}/> 
     <BottomTabs />
    </SafeAreaView>
  )
}