import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import FlatListComponent from "../components/FlatListComponent";
import SectionListComponent from "../components/SectionListComponent";

export default function ScrollablePage() {
  const dataList = [
    { id: "1", name: "Bia" },
    { id: "2", name: "Gavi" },
    { id: "3", name: "Biel" },
  ];

  const sectionData = [
    {
      title: "Seção 1",
      data: ["Item A", "Item B", "Item C"],
    },
    {
      title: "Seção 2",
      data: ["Item D", "Item E", "Item F"],
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Text style={styles.heading}>FlatList</Text>
        <FlatListComponent data={dataList} />

        <Text style={styles.heading}>SectionList</Text>
        <SectionListComponent data={sectionData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
});
