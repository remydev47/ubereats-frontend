import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function HeaderTabs () {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton text='Delivery' buttonColor="black" textColor='white' />
      <HeaderButton text='Pick-up' buttonColor='white' textColor='black' />
    </View>
  )
}

const HeaderButton = (props) => {
    return(
            <TouchableOpacity style={{
                backgroundColor: props.buttonColor,
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,
            }}>
             <Text style={{ color: props.textColor, fontSize: 15, fontWeight: "900"}}>
                {props.text}</Text>
            </TouchableOpacity>  
    )
}
