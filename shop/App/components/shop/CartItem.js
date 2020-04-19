import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import colors from "../../constants/colors";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS == "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <TouchableComponent
      onPress={() => {
        props.onViewDetails();
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemData}>
          <Text style={styles.quantity}>{props.quantity} </Text>
          <Text style={styles.title}>{props.title}</Text>
        </Text>
        <View style={styles.itemData}>
          <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
          <TouchableComponent onPress={props.onRemove} style={styles.actions}>
            <Ionicons
              name={Platform.OS == "android" ? "md-trash" : "ios-trash"}
              size={23}
              color={colors.remove}
            />
          </TouchableComponent>
        </View>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "open-sans-bold",
    color: "#888",
    fontSize: 16,
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    fontFamily: "open-sans",
    color: "#888",
  },
  actions: {
    marginLeft: 20,
  },
});

export default CartItem;
