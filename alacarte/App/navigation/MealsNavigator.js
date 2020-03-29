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
import FiltersScreen from "../screens/FiltersScreen";

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
    // navigationOptions: {
    //   drawerLabel: "Favourites!!"
    // },
    defaultNavigationOptions: defaulSatcktNavOptions
  }
);

const FilterNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
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

const MainNavigator = createDrawerNavigator(
  {
    Alacarte: AppTabNavigator,
    Favs: {
      screen: FavNavigator,
      navigationOptions: {
        drawerLabel: "Favourites!!"
      }
    },
    Filters: FilterNavigator
  },
  {
    contentOptions: {
      activeTintColor:
        Platform.OS == "android" ? Color.primary : Color.secondary,
      labelStyle: {
        fontFamily: "comic-sans",
        fontWeight: undefined
      }
    }
  }
);
export default createAppContainer(MainNavigator);
