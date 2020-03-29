import React from "react";
import { Text, StyleSheet } from "react-native";

const MyText = props => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({ text: { fontFamily: "comic-sans" } });

export default MyText;
