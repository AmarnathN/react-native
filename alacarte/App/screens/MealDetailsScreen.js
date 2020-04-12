import React, { useEffect, useCallback } from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import MyHeaderButton from "../components/MyHeaderButton";
import MyText from "../components/MyText";
import { toggleFavourite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <MyText>{props.children}</MyText>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector((state) => state.meals.meals);
  const selectedMeal = availableMeals.find((meal) => mealId == meal.id);
  const isCurrentMealfavourite = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id === mealId)
  );
  const dispatch = useDispatch();
  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title }); added as param in previous copmponent
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: isCurrentMealfavourite });
  }, [isCurrentMealfavourite]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <MyText>{selectedMeal.duration}mins</MyText>
        <MyText>{selectedMeal.complexity.toUpperCase()}</MyText>
        <MyText>{selectedMeal.affordability.toUpperCase()} </MyText>
      </View>
      <MyText style={styles.title}>Ingrediants</MyText>
      <MyText>List of Ingrediants ...</MyText>
      {selectedMeal.ingredients.map((ingrediant) => {
        return <ListItem key={ingrediant}>{ingrediant}</ListItem>;
      })}
      <MyText style={styles.title}>Steps</MyText>
      <MyText>List of Steps ...</MyText>
      {selectedMeal.steps.map((step) => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find((meal) => mealId == meal.id);
  const toggleFavourite = navigationData.navigation.getParam("toggleFav");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const isFav = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: mealTitle,
    // headerTitleContainerStyle: {
    //   left: "35%",
    //   right: 35,
    // },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Fav"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavourite}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  details: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "comic-sans-bold",
    fontSize: 20,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
  },
});

export default MealDetailsScreen;
