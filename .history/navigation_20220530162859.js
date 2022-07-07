import React from "react";
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import RestaurantDetail from "./Screens/RestaurantDetail";

export default function RootNavigation() {

    const Stack = createNativeStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    return (
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={HomeScreen} /> 
                <Stack.Screen name="RestaurantDetails" component={RestaurantDetail} /> 
            </Stack.Navigator>
    )
}