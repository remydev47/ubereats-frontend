import { View , Text } from 'react-native'
import { SafeAreaView  } from 'react-native-safe-area-context';
import { ScrollView, FlatList } from 'react-native';
import { Divider } from 'react-native-elements'
import React, { useEffect } from 'react'
import HeaderTabs from '../components/Home/HeaderTabs'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import RestaurantItems, { localRestaurants } from '../components/Home/RestaurantItems'
import BottomTabs from '../components/Home/BottomTabs'

export default function Home({navigation}) {
  const [activeTab, setActiveTab] = React.useState('Delivery');

    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  

  return (
    <SafeAreaView style={{ backgroundColor: '#eee',}}>
       <View style={{  backgroundColor:'#fff', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar  />
       </View>
       <View>
        <Categories /> 
        <FlatList 
          data={localRestaurants} 
          renderItem={({restaurantData}) =>
          <RestaurantItems restaurantData={restaurantData} 
             navigation={navigation}
          /> } 
          />
       </View>
       <View>
         <BottomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
       </View>
    </SafeAreaView>
  )
}