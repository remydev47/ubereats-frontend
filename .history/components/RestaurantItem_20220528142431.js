import { View, Text, Image } from 'react-native'
import React from 'react'

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
       {/*Restaurantimage*/}
    </View>
  )
}

const RestaurantImage = () => {
    return (
        <Image source={{
            uri: 'https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg'
        }}
        style={{ width: '100%', height: 180}}
        />
    )
}