import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function MainScreen() {
  const [text, setText] = useState("");

  const handleButtonPress = () => {
    alert(`Você digitou: ${text}`);
  };

  const handleCustomButtonPress = () => {
    alert("Botão personalizável pressionado!");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo aqui..."
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="Enviar" onPress={handleButtonPress} />
      <CustomButton title="Botão Personalizável" onPress={handleCustomButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
});
