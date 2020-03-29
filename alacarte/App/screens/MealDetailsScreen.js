import React from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/DummyData";
import MyHeaderButton from "../components/MyHeaderButton";
import MyText from "../components/MyText";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <MyText>{props.children}</MyText>
    </View>
  );
};

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => mealId == meal.id);
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
      {selectedMeal.ingredients.map(ingrediant => {
        return <ListItem key={ingrediant}>{ingrediant}</ListItem>;
      })}
      <MyText style={styles.title}>Steps</MyText>
      <MyText>List of Steps ...</MyText>
      {selectedMeal.steps.map(step => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => mealId == meal.id);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Fav"
          iconName="ios-star"
          onPress={() => console.log("Marked Fav")}
        />
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  details: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10
  },
  image: { width: "100%", height: 200 },
  title: {
    fontFamily: "comic-sans-bold",
    fontSize: 20,
    textAlign: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5
  }
});

export default MealDetailsScreen;
