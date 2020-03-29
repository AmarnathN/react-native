import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import MyHeaderButton from "../components/MyHeaderButton";
import { MEALS } from "../data/DummyData";

const FavouritesScreen = props => {
  const fabMeals = MEALS.filter(meal => meal.id == "m1" || meal.id == "m2");
  return <MealList listData={fabMeals} navigation={props.navigation} />;
};
FavouritesScreen.navigationOptions = navigationData => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Fav"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};
export default FavouritesScreen;
