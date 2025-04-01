import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import ScrollablePage from "./src/screens/ScrollablePage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./src/screens/ProfileScreen";


export default function App() {
return (
  <View style ={styles.container}>
    <Text style ={styles.title}>Bem-vindo ao app da Gavi</Text>
    <Text style={styles.description}>Hola mi nombre es gavi ☺</Text>
    <Image style ={styles.image} source ={require('./assets/img/gavi.jpg')} />
  </View>
)
}
export default function App() {
  return <ScrollablePage />;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  image: {
    width: 300,
    height: 200,
    borderRadius: 10
  },
});
