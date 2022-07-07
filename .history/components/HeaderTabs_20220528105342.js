import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function HeaderTabs () {
  return (
    <View>
      <HeaderButton />
      <HeaderButton />
    </View>
  )
}

const HeaderButton = () => {
    return(
        <View>
            <TouchableOpacity>
             <Text>Delivery</Text>
            </TouchableOpacity>
        </View>
        
    )
}
