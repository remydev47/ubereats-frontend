import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import restaurants from '../assets/data/restaurants.json';
import About from '../components/restaurantDetail/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/restaurantDetail/MenuItems';



 const RestaurantDetail = () => {
  return (
    <View >
     <About  />
      <MenuItems /> 
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

export default RestaurantDetail;