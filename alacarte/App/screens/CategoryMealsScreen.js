import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/DummyData";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };
  const categoryId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={styles.listitem}
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
  },
  listitem: {
    width: "100%",
    padding: 10
  }
});

export default CategoryMealsScreen;
