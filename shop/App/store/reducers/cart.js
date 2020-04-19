import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cartItem";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      var cartItem = {};
      if (state.items[addedProduct.id]) {
        //added product is in cart
        newQuantity = state.items[addedProduct.id].quantity + 1;
        newSum = state.items[addedProduct.id].sum + productPrice;
        cartItem = new CartItem(
          newQuantity,
          productPrice,
          productTitle,
          newSum
        );
      } else {
        cartItem = new CartItem(1, productPrice, productTitle, productPrice);
      }
      return {
        items: { ...state.items, [addedProduct.id]: cartItem },
        totalAmount: state.totalAmount + productPrice,
      };
    case REMOVE_FROM_CART:
      const selectedProduct = state.items[action.productId];
      const currentQuanity = selectedProduct.quantity;
      let updatedCartItems;
      if (currentQuanity > 1) {
        const newQuantity = currentQuanity - 1;
        const newSum = selectedProduct.sum - selectedProduct.productPrice;

        const updatedCartItem = new CartItem(
          newQuantity,
          selectedProduct.productPrice,
          selectedProduct.productTitle,
          newSum
        );
        updatedCartItems = {
          ...state.items,
          [action.productId]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.productId];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedProduct.productPrice,
      };
  }
  return state;
};
