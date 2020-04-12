import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import colors from "../../constants/colors";

const ProductDetailsScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
      </View>
      <View style={styles.actions}>
        <Button color={colors.primary} title="Add to Cart"></Button>
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
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
