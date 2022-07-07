import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const foods = [
    {
        "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
        "title": "Cajun Ribs",
        "description": "For lovers of a spicy touch. Ribs bathed in our Original sauce accompanied by Cajun spices. Served with French fries and coleslaw.",
        "price":"$18.95"
    }, 
    {
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg",
      "title": "Papas Locas El Cabo",
      "description": "French fries with shredded chicken, gouda cheese and ham.",
      "price": "$7.90"
    },
    {
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant4.jpeg",
      "title": "Onion Rings",
      "description": "Los tradicionales aros de cebolla de tony romas dorados, crujientes y ligeros. Únicos en el mundo, acompañados de salsa BBQ.",
      "price": "$6.95"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrv_Xp8ubtMYcRQeuBgDUjlkokFDfczLpULp08CMKd8FEnempprkZ5RwZIi1guLiAxHgQ&usqp=CAU",
        "title": "Burger Mustang",
        "description": "Homemade bread, burger sauce, lettuce, sweet and sour pickle, bacon, cheddar and BBQ sauce. Beef 180 grams.",
        "price":"$5.90 "  
    },
    {
      "image": "https://daintfood.com/wp-content/uploads/2022/03/p2.jpg",
      "title": "Alabama bread",
      "description": "Artisan bread, butter sauce, garlic, BBQ chicken and cheddar.",
      "price":"$3.00 " 
    }

];

const styles = StyleSheet.create({
    menuItemStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
      fontSize: 20,
      fontWeight: '600',
    }
})

export default function MenuItems() {
  return (
    <View>
      <View style={styles.menuItemStyle}>
       <FoodInfo food={foods[0]}/> 
       <FoodImage food={foods[0]}/> 
     </View>
    </View>
  )
}

const FoodInfo = (props) => {
    return(
      <>
      {foods.map((food, index) => (
        <View key={index}>
        <View style={{ width: 240, justifyContent: "space-evenly"}}>
            <Text style={styles.titleStyle}>{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
         </View>
        </View>
      ))}
      </>
    )
}

const FoodImage = (props) => {
  return(
    <View>
      <Image source={{uri: props.food.image}} style={{height: 100, width: 100, borderRadius: 8}}/>
    </View>
  )
}