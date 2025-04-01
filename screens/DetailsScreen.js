import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Detalhes</Text>
      <Text style={styles.message}>{message}</Text>
      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
});
