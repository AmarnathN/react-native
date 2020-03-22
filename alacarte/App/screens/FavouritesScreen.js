import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavouritesScreen = props => {
  return (
    <View style={styles.container}>
      <Text>The FavouritesScreen</Text>
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

export default FavouritesScreen;
