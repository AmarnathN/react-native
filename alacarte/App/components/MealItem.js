import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground
} from "react-native";
import MyText from "./MyText";

const MealItem = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImg}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
          <MyText>{props.duration}mins</MyText>
          <MyText>{props.complexity.toUpperCase()}</MyText>
          <MyText>{props.affordability.toUpperCase()} </MyText>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100%",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  mealRow: {
    alignItems: "center",
    justifyContent: "center"
  },
  mealHeader: {
    height: "85%",
    alignItems: "center"
  },
  mealDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    height: "15%"
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title: {
    fontFamily: "comic-sans-bold",
    fontSize: 20,
    fontWeight: "300",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingVertical: 5,
    paddingHorizontal: 5,
    textAlign: "center"
  }
});

export default MealItem;
