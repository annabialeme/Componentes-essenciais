import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

export default function App() {
return (
  <View style ={styles.container}>
    <Text style ={styles.title}>Bem-vindo ao app da Gavi</Text>
    <Text style={styles.description}>Hola mi nombre es gavi ☺</Text>
    <Image style ={styles.image} source ={require('./assets/img/gavi.jpg')} />
  </View>
)
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
