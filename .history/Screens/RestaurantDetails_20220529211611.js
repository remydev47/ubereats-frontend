import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import restaurants from '../assets/data/restaurants.json';
import About from '../components/restaurantDetails/About';
import { Divider } from 'react-native-elements';

const image = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg";

const title = "Kitchen Tai Cuisine"

const description = "For lovers of a spicy touch. Ribs bathed in our Original sauce accompanied by Cajun spices. Served with French fries and coleslaw."


 const RestaurantDetails = () => {
  return (
    <View >
      {/* <Image 
       source={{uri: restaurant.image}}
       style={styles.image}
      /> */}
     <About />
     <Divider width={1.8} style={{ marginVertical: 20 }} />
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 4/3,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default RestaurantDetails;