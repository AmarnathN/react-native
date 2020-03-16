import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    //shadow only for ios
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowRadius: 6,
    // elevation for andriod shadow
    elevation: 10,
    borderRadius: 5,
    padding: 15
  }
});

export default Card;
