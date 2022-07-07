import { View, Text } from 'react-native'
import React from 'react'

const foods = [
    {
        "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
        "title": "Cajun Ribs",
        "description": "For lovers of a spicy touch. Ribs bathed in our Original sauce accompanied by Cajun spices. Served with French fries and coleslaw.",
        "price": 18.95
    }
]

export default function MenuItem() {
  return (
    <View>
      <Text>MenuItem</Text>
    </View>
  )
}