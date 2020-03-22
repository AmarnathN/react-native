import React from "react";
import { StyleSheet, Text, View, Button, Platform } from "react-native";
import { CATEGORIES } from "../data/DummyData";

import Color from "../constants/color";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id == categoryId);
  return (
    <View style={styles.container}>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Meal Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id == categoryId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor:
        Platform.OS == "android" ? Color.primary : Color.secondary
    },
    headerTintColor: Platform.OS == "ios" ? Color.primary : "white"
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

export default CategoryMealsScreen;
