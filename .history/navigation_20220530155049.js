import React from "react";
import { createNativeStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import RestaurantDetail from "./Screens/RestaurantDetail";

export default function RootNavigation() {

    const Stack = createNativeStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    return (
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} />
                {/* <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} /> */}
            </Stack.Navigator>
    )
}