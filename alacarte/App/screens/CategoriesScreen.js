import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoriesScreen = props => {
  //   console.log(props);
  return (
    <View style={styles.container}>
      <Text>The CategoriesScreen</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
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

export default CategoriesScreen;
