import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import RestaurantDetails from "./Screens/RestaurantDetails";

export default function ReactNavigation() {

    const stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={screenOptions}>
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
            </stack.Navigator>
        </NavigationContainer>
    )
}