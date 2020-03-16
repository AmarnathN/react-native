import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import Card from "../Components/Card";
import NumberContainer from "../Components/NumberContainer";
import Color from "../Constants/Colors.constants";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNm = Math.floor(Math.random() * (max - min)) + min;

  if (rndNm === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNm;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button title={"LOWER"} onPress={() => {}} color={Color.buttonNo} />
          </View>
          <View style={styles.buttons}>
            <Button
              title={"GREATER"}
              onPress={() => {}}
              color={Color.buttonYes}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15
  },
  buttons: {
    width: "70%",
    padding: 10
  }
});

export default GameScreen;
