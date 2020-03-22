import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native";
import { CATEGORIES } from "../data/DummyData";
import Color from "../constants/color";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id
          });
        }}
        style={styles.container}
      >
        <View style={styles.gridItems}>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  //   console.log(props);
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Alacarte Categories",
  headerStyle: {
    backgroundColor: Platform.OS == "android" ? Color.primary : "white"
  },
  headerTintColor: Platform.OS == "ios" ? Color.primary : "white"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  gridItems: {
    flex: 1,
    margin: 15,
    height: 160
  }
});

export default CategoriesScreen;
