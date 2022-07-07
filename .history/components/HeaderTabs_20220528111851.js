import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


export default function HeaderTabs () {
    const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton text='Delivery' buttonColor="black" textColor='white' activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeaderButton text='Pick-up' buttonColor='white' textColor='black' activeTab={activeTab} setActiveTab={setActiveTab} />
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
