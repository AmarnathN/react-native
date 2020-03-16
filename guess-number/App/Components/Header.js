import React from "react";
import { View, StyleSheet, Text, ShadowPropTypesIOS } from "react-native";
import Color from "../Constants/Colors.constants";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "900"
  }
});

export default Header;
