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

const ProductItem = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS == "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableComponent onPress={props.onViewDetail}>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={colors.primary}
                title="View Details"
                onPress={props.onViewDetail}
              />
              <Button
                color={colors.primary}
                title="To Cart"
                onPress={props.onAddToCart}
              />
            </View>
          </View>
        </TouchableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  touchable: {
    overflow: "hidden",
  },
  details: {
    flexDirection: "column",
    alignItems: "center",
    height: "25%",
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    fontFamily: "open-sans",
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    padding: 5,
  },
});

export default ProductItem;
