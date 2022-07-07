import { View, Text } from 'react-native'
import React from 'react'

export default function RestaurantItem() {
  return (
    <View>
      {/*Restaurantimage*/}
      <RestaurantImage />
       {/*Restaurantimage*/}
    </View>
  )
}

const RestaurantImage = () => {
    return (
        <View>
            <Text>RestaurantImage</Text>
        </View>
    )
}