import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS == "android" && Platform.Version > 21) {
    TouchableCmp = TouchableNativeFeedback; // for ripple effect
  }
  return (
    <View style={styles.container}>
      <TouchableCmp
        onPress={() => {
          props.onSelect();
        }}
      >
        <View
          style={{ ...styles.gridItems, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowColor: "black",
    padding: 10
  },
  gridItems: {
    height: 150,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5
  },
  title: {
    fontFamily: "comic-sans"
  }
});

export default CategoryGridTile;
