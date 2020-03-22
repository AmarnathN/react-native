import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoryMealsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>CategoryMealsScreen</Text>
      <Button
        title="Meal Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
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

export default CategoryMealsScreen;
