import { View, Text, Image } from 'react-native'
import React from 'react'

const items = [
    {
        image: require('../assets/images/shopping-bag.png'),
        text: 'Pick-up',
    },
    {
        image: require('../assets/images/soft-drink.png'),
        text: 'Soft Drinks',
    },
    {
        image: require('../assets/images/bread.png'),
        text: 'Bakery Items',
    },
    {
        image: require('../assets/images/fastfood.png'),
        text: 'FastFood',
    },
    {
        image: require('../assets/images/deals.png'),
        text: 'Deals',
    },
    {
        image: require('../assets/images/coffee.png'),
        text: 'coffee & Tea',
    },
];

export default function Categories() {
  return (
    <View>
      <Image source={items[0].image} 
        style={{ 
            width: 50, 
            height: 40, 
            resizeMode: 'contain'
        }}
      />
      <Text 
      style={{ fontSize: 14, fontWeight: '900'}}
      >
          {items[0].text}
      </Text>
    </View>
  )
}