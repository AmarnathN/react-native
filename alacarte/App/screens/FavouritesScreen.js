import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/DummyData";

const FavouritesScreen = props => {
  const fabMeals = MEALS.filter(meal => meal.id == "m1" || meal.id == "m2");
  return <MealList listData={fabMeals} navigation={props.navigation} />;
};
export default FavouritesScreen;
