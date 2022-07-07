import { View, Text,Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import restaurants from '../assets/data/restaurants.json';

const restaurant = restaurants[0];
("");

 const RestaurantDetails = () => {
  return (
    <View style={styles.page}>
      <Image 
       source={{uri: restaurant.image}}
       style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5/3,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default RestaurantDetails;