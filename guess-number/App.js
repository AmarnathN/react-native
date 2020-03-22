import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./App/Components/Header";
import StartGameScreen from "./App/Screens/StartGameScreen";
import GameScreen from "./App/Screens/GameScreen";
import GameOverScreen from "./App/Screens/GameOverScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "comic-sans": "./assets/fonts/COMIC.TTF",
    "comic-sans-bold": "./assets/fonts/comicz.ttf"
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);
  const [dataLoaded, setDataloaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataloaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameEndHandler = noOfRounds => {
    setguessRounds(noOfRounds);
  };
  const restartHandler = () => {
    setguessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameEnd={gameEndHandler} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        rounds={guessRounds}
        onRestart={restartHandler}
        userNumber={userNumber}
      />
    );
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
