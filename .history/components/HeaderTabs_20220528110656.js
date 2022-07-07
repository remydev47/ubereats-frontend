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
            <TouchableOpacity style={{
                backgroundColor: 'black',
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
            }}>
             <Text style={{ color: 'white', fontSize: 15, fontWeight: "900"}}>
                {props.text}</Text>
            </TouchableOpacity>  
    )
}
