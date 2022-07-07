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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginTop: 10 }}>
            <View>
             <Text style={{ fontSize: 15, fontWeight: 'bold'}}>FarmHouse Kitchen Thai Cuisine</Text>
             <Text style={{ fontSize: 13, color: 'gray'}}>30-45 - min</Text>
            </View>
            <View style={{ backgroundColor: '#fff', height: 30, width: 30, alignItems: 'center', borderRadius: 15,}}>
              <Text>4.5</Text>
            </View>
        </View>
    )
}