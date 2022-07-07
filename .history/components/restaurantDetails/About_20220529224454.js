import { View, Text, Image } from 'react-native'
import React from 'react'

const image = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg";

const title = "Kitchen Tai Cuisine"

const description = "For lovers of a spicy touch. Ribs bathed in our Original sauce accompanied by Cajun spices. Served with French fries and coleslaw."


export default function About() {
  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantTitle title={title}/>
        {/*<RestaurantDescription />*/}
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
      <Text style={{fontSize: 15, fontWeight: '900',}}>
        {props.title}
      </Text>
    </View>
  )
}
