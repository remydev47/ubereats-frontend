import { View, Text, Image } from 'react-native'
import React from 'react'
import{ useRoute } from '@react-navigation/native'

const image = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg";

const title = "FarmHouse Kitchen Thai Cuisine"

const detail = "Thai • Vegeterian Friendly • $$ • 🎫 4.5 ⭐(2671+)"

const description = "For lovers of a spicy touch. Ribs bathed in our Original sauce accompanied by Cajun spices. Served with French fries and coleslaw."


export default function About(props) {

  const { image, title, detail, description } = props

  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantTitle title={title}/>
      <Restaurantdetails details={detail}/>
      {/* <RestaurantDescription description={description} /> */}
    </View>
  )
}

const RestaurantImage = (props) => {
  return (
    <View>
      <Image 
        source={{uri: props.image}}
        style={{width: '100%', height: 180}}
      />
    </View>
  )
}

const RestaurantTitle = (props) => {
  return (
    <View>
      <Text style={{fontSize: 29, fontWeight: '600', marginTop: 10, marginHorizontal: 15,}}>
        {props.title}
      </Text>
    </View>
  )
}
const Restaurantdetails = (props) => {
  return(
    <Text style={{fontSize: 15.5, fontWeight: '500', marginTop: 10, marginHorizontal: 15,}}>
      {props.details}
    </Text>
  )
}

const RestaurantDescription = (props) => {
  return (
    <View>
      <Text style={{fontSize: 17, marginTop: 10, marginHorizontal: 15,}}>
        {props.description}
      </Text>
    </View>
  )
}
