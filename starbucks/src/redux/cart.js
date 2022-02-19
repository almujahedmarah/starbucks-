const initialState = {
  cart: [],
};

const cartItem = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_cart":
      return { cart: [...state.cart, payload] };

    case "Remove_cart":
      return {
        cart: state.cart.filter((item) => {
          return item.id !== payload.id;
        }),
      };
    case "Total":
      let total;
      return {
        cart: state.cart.filter((item) => {
          total += item.price;
        }),
      };
    default:
      return state;
  }
};

export default cartItem;

// ======= Action ====================================================================

export const Removecart = (cart) => {
  return {
    type: "Remove_cart",
    payload: cart,
  };
};

export const addcart = (cart) => {
    return {
      type: "ADD_cart",
      payload: cart,
    };
  };

  export const totalcart = (cart) => {
    return {
      type: "TOTAL",
      payload: cart,
    };
  };