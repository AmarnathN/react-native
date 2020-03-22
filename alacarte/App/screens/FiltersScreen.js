import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FiltersScreen = props => {
  return (
    <View style={styles.container}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10
  }
});

export default FiltersScreen;
