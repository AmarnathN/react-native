import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MyHeaderButton from "../components/MyHeaderButton";
import MyText from "../components/MyText";

const FiltersScreen = props => {
  return (
    <View style={styles.container}>
      <MyText text="FiltersScreen" />
    </View>
  );
};

FiltersScreen.navigationOptions = navigationData => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          title="Fav"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10
  }
});

export default FiltersScreen;
