import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import ProductOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import colors from "../constants/colors";
import ProductDetailsScreen from "../screens/shop/ProductsDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductOverviewScreen,
    ProductDetails: ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS == "android" ? colors.primary : "",
      },
      headerTintColor: Platform.OS == "android" ? "white" : colors.primary,
      headerTitleStyle: { fontFamily: "open-sans-bold" },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
    },
  }
);

export default createAppContainer(ProductsNavigator);
