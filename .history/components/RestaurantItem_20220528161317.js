import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
          "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
      },
      {
        name: "Benihana",
        image_url:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
      },
      {
        name: "India's Grill",
        image_url:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
      },
];

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30,}}>
     <View style={{marginTop: 5, padding: 3,  }}>
       <RestaurantImage />
       <RestaurantDetails />
     </View>
    </TouchableOpacity>
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
            <View style={{ backgroundColor: '#fff', height: 30, width: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center'}}>
              <Text>4.5</Text>
            </View>
        </View>
    )
}