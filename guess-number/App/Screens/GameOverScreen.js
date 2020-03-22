import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Card from "../Components/Card";

const GameOverScreen = props => {
  return (
    <View>
      <Card style={{ alignItems: "center" }}>
        <Text>Game Over!!!!!</Text>
      </Card>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../../assets/success-2.png")}
          fadeDuration={4000}
          source={{
            uri:
              "https://png.pngtree.com/element_our/png/20181031/cartoon-character-success-material-png_224989.jpg"
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Card style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text>Your computer took : {props.rounds} : rounds </Text>
          <Text>to guess the number : {props.userNumber} : </Text>
          <Button
            style={styles.buttons}
            title="New Game"
            onPress={props.onRestart}
          />
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "space-between"
  },
  imageContainer: {
    width: "80%",
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40
  },
  image: {
    width: "100%",
    height: "100%"
  },
  buttonContainer: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    width: "40%"
  }
});
export default GameOverScreen;
