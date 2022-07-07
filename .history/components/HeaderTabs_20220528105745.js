import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function HeaderTabs () {
  return (
    <View>
      <HeaderButton text='Delivery' />
      <HeaderButton text='Pick-up' />
    </View>
  )
}

const HeaderButton = (props) => {
    return(
        <View>
            <TouchableOpacity>
             <Text>{props.text}</Text>
            </TouchableOpacity>
        </View>
        
    )
}
