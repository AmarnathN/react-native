import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../Components/Card";
import Color from "../Constants/Colors.constants";
import Input from "../Components/Input";
import NumberContainer from "../Components/NumberContainer";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const numericInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    Keyboard.dismiss();
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHanlder = () => {
    Keyboard.dismiss();
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      setEnteredValue("");
      Alert.alert("Invalid Number!!!", "number has to between 1 and 99", [
        { text: "okay", style: "cancel" }
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(enteredValue);
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber} </NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}> Start a New Game !</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a Number</Text>
          <Input
            autoFocus={true}
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numericInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button
                title={"Reset"}
                onPress={resetInputHandler}
                color={Color.buttonNo}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                title={"Confirm"}
                onPress={confirmInputHanlder}
                color={Color.buttonYes}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%", //if the device is too small
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  buttons: {
    width: "40%"
  },
  summaryContainer: {
    marginTop: 10
  }
});

export default StartGameScreen;
