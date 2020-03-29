import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import Color from "../constants/color";

const defaulSatcktNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS == "android" ? Color.primary : Color.secondary
  },
  headerTintColor: Platform.OS == "ios" ? "black" : "white"
};

const AppNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailsScreen
  },
  {
    mode: "card",
    defaultNavigationOptions: defaulSatcktNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailsScreen
  },
  {
    mode: "card",
    defaultNavigationOptions: defaulSatcktNavOptions
  }
);

const tabScreenConfig = {
  Alacarte: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={20} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={20} color={tabInfo.tintColor} />;
      }
    }
  }
};

const AppTabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: "black",
          activeBackgroundColor: Color.secondary
        }
      })
    : createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "black",
        barStyle: { backgroundColor: Color.primary },
        shifting: true
      });

export default createAppContainer(AppTabNavigator);
