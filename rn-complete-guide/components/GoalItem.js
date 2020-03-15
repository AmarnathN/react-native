import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.listitem}>
      <View style={styles.buttonsContainer}>
        <View style={{ width: "90%", alignContent: "center" }}>
          <Text>{props.title}</Text>
        </View>
        <View style={styles.button}>
          <Button title="x" onPress={props.onTouch.bind(this, props.uid)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listitem: {
    borderColor: "black",
    marginTop: 15,
    borderWidth: 2,
    backgroundColor: "#d4d3d2"
  },
  buttonsContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    padding: 1
  },
  button: {
    width: "10%",
    justifyContent: "center",
    borderWidth: 0.5
  }
});
export default GoalItem;
