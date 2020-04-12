import React from "react";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import MyHeaderButton from "../components/MyHeaderButton";
import { View, Text, StyleSheet } from "react-native";
import MyText from "../components/MyText";

const FavouritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);

  if (favMeals.length == 0 || !favMeals) {
    return (
      <View style={styles.container}>
        <MyText>No favourite Meals as of now, start adding some !!</MyText>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};
FavouritesScreen.navigationOptions = (navigationData) => {
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
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
export default FavouritesScreen;
