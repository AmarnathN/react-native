import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CATEGORIES } from "../data/DummyData";

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
    headerTitle: selectedCategory.title
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
