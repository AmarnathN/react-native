import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.listitem}>
      <View style={styles.buttonsContainer}>
        <View style={{ width: "95%", justifyContent: "center" }}>
          <Text>{props.title}</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="x"
            onPress={props.onTouch.bind(this, props.uid)}
            color="red"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listitem: {
    borderColor: "black",
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: "#d4d3d2"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5
  },
  button: {
    justifyContent: "center"
  }
});
export default GoalItem;
