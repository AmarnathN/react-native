import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "../components/MealItem";

const MealList = (props) => {
  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);
  const renderMealItem = (itemData) => {
    const isfavourite = favouriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );
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
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isfavourite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={styles.listitem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  listitem: {
    width: "100%",
    padding: 10,
  },
});
export default MealList;
