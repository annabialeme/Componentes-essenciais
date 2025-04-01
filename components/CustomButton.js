import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  customButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});