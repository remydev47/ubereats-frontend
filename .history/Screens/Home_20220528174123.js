import { View , Text, ScrollView } from 'react-native'
import { SafeAreaView  } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY = "6dce4f1813mshc87cb80b9ec3143p14b126jsne6f43eebe058";

export default function Home() {

    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

    const getRestaurantsFromYelp = () => {
        const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";
    
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) =>
            setRestaurantData(
              json.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLowerCase())
              )
            )
          );
      };

      useEffect(() => {
          getRestaurantsFromYelp();
      }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee',}}>
       <View style={{  backgroundColor:'#fff', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
       </View>
       {/* <ScrollView  showsVerticalScrollIndicator={false}> */}
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
       {/* </ScrollView> */}
    </SafeAreaView>
  )
}