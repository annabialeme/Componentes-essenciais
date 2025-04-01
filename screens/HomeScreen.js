import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo à Home!</Text>
        <Text style={styles.text}>Está é minha página inicial</Text>
        <Button
          title="Ir para Detalhes"
          onPress={() => navigation.navigate("Details", { message: "oin!" })}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: "#555",
    }
  });
  