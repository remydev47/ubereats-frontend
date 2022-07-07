import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function HeaderTabs () {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton text='Delivery' />
      <HeaderButton text='Pick-up' />
    </View>
  )
}

const HeaderButton = (props) => {
    return(
            <TouchableOpacity>
             <Text>{props.text}</Text>
            </TouchableOpacity>  
    )
}
