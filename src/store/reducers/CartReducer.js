const initState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD TO CART":
      const { product, quantity } = action.payload;
      const check = state.products.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const totalprice = state.totalPrice + product.discountPrice * quantity;
        const totalquantities = state.totalQuantities + quantity;
        product.quantity = quantity;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: totalprice,
          totalQuantities: totalquantities,
        };
      }

    default:
      return state;
  }
};
export default CartReducer;
