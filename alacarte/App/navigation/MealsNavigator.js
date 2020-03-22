import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Color from "../constants/color";

const AppNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailsScreen
  },
  {
    mode: "card",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS == "android" ? Color.primary : Color.secondary
      },
      headerTintColor: Platform.OS == "ios" ? "black" : "white"
    }
  }
);

export default createAppContainer(AppNavigator);
