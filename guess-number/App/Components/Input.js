import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = props => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: "30%",
    textAlign: "center"
  }
});

export default Input;
