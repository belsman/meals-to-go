import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from "react-native";
import SearchInput from "../components/SearchInput";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchInput />
      </View>
      <View style={styles.list}>
        <Text>listXX</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

export default RestaurantsScreen;