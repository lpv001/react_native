import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from "./app/config/colors"
import HomeScreen from './app/components/HomeScreen';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark}}>
      {/* <HomeScreen /> */}
    </View>
  );
}


