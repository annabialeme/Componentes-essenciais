import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import Card from "../components/Card";

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

export default function MainScreen() {
    const cardData = [
      { id: "1", title: "Card 1", description: "Gavi lindoooo" },
      { id: "2", title: "Card 2", description: "Bia lindaaaa" },
      { id: "3", title: "Card 3", description: "Gab lindooo" },
    ];
  
    const renderCard = ({ item }) => <Card title={item.title} description={item.description}
    imageUrl={item.imageUrl}
      onPress={() => alert(`Você clicou em ${item.title}`)} />;
  
    return (
      <View style={styles.container}>
        <Header title ="Minha página com Props" />
        <FlatList
          data={cardData}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
        />
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
