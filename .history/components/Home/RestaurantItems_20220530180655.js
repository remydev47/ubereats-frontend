import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export const localRestaurants = [
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
          "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
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

export default function RestaurantItems({ navigation }) {
    const navigation = useNavigation();

    const onPress = () => {
      navigation.navigate('RestaurantDetail');
    };

  return (
    <>
        {localRestaurants.map((restaurant, index) => (
            <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30,}} onPress={onPress}
            >
             <View key={index} style={{ marginTop: 3, padding: 5,}}>
               <RestaurantImage image={restaurant.image_url} />
               <RestaurantDetails name={restaurant.name} rating={restaurant.rating}/>
             </View>
           </TouchableOpacity>
        ))}
    </>
  
    
    
  )
}

const RestaurantImage = (props) => {
    return (
       <>
          <Image source={{
              uri:  props.image,
        }}
        style={{ width: '100%', height: 180}}
        />
        <TouchableOpacity style={{position: 'absolute', right: 20,}}>
            <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
        </TouchableOpacity>
       </>
    )
}

const RestaurantDetails = (props) => {
    return(
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginTop: 10 }}>
            <View>
             <Text style={{ fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
             <Text style={{ fontSize: 13, color: 'gray'}}>30-45 - min</Text>
            </View>
            <View style={{ backgroundColor: '#fff', height: 30, width: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center'}}>
              <Text>4.5</Text>
            </View>
        </View>
    )
}