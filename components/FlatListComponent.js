import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

export default function FlatListComponent({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    borderRadius: 5,
  },
});
