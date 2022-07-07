import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';
// import RootNavigation from './navigation';
 import Home from './Screens/HomeScreen';
  import RestaurantDetail from './Screens/RestaurantDetail';

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigation />  
        <StatusBar style="auto" />
    </NavigationContainer>
    
   
  );
}

