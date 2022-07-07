import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';
import Home from './Screens/Home';
import RestaurantDetails from './Screens/RestaurantDetails';

export default function App() {
  return (
    <View >
       {/* <Home />   */}
      {/* <RestaurantDetails />  */}
    <RootNavigation />
    </View>
  );
}

