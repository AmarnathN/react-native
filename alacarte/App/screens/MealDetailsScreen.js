import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/DummyData";

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => mealId == meal.id);
  return (
    <View style={styles.container}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => mealId == meal.id);
  return {
    headerTitle: selectedMeal.title
  };
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

export default MealDetailsScreen;
