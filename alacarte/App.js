import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import AppNavigator from "./App/navigation/MealsNavigator";
import mealsReducers from "./App/store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducers,
});
const myStore = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "comic-sans": require("./assets/fonts/comici.ttf"),
    "comic-sans-bold": require("./assets/fonts/comicz.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={myStore}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "comic-sans-bold",
  },
});
