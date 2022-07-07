import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
      <RestaurantDetails />
    </View>
  )
}

const RestaurantImage = () => {
    return (
       <>
          <Image source={{
            uri: 'https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg'
        }}
        style={{ width: '100%', height: 180}}
        />
        <TouchableOpacity style={{position: 'absolute', right: 20,}}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
        </TouchableOpacity>
       </>
    )
}

const RestaurantDetails = () => {
    return(
        <View>
            <Text>FarmHouse Kitchen Thai Cuisine</Text>
            <Text></Text>
        </View>
    )
}