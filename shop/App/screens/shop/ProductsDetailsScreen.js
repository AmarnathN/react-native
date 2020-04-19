import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import colors from "../../constants/colors";
import MyHeaderButton from "../../components/ui/MyHeaderButton";
import * as cartActions from "../../store/actions/cart";

const ProductDetailsScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
      </View>
      <View style={styles.actions}>
        <Button
          color={colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        ></Button>
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
            onPress={() => {
              navData.navigation.navigate("Cart");
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: "100%",
    marginVertical: 5,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    fontFamily: "open-sans-bold",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: "open-sans",
    textAlign: "center",
    marginHorizontal: 20,
  },
});
export default ProductDetailsScreen;
