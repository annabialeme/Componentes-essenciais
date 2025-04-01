import React from "react";
import { SectionList, Text, StyleSheet } from "react-native";

export default function SectionListComponent({ data }) {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 16,
    backgroundColor: "#e0e0e0",
    marginVertical: 5,
    borderRadius: 5,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#d3d3d3",
    padding: 5,
  },
});
