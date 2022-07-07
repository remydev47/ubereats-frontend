import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';
// import RootNavigation from './navigation';
 import Home from './Screens/Home';
  import RestaurantDetail from './Screens/RestaurantDetail';

export default function App() {
  return (
    <RootNavigation />
  );
}

