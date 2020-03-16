import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./App/Components/Header";
import StartGameScreen from "./App/Screens/StartGameScreen";
import GameScreen from "./App/Screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = selectedNumber => {
    console.log(selectedNumber);
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }
  return (
    <View style={styles.container}>
      <Header title="Guess The Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
