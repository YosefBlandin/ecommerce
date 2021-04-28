const reducer = (state, action) => {
  const elementOfCart = state.cart.find((e) => e.id === action.payload.id);
  const findProduct = (id) =>
    state.products.find((element) => element.id === id).price;
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cart.find((e) => e.id === action.payload.id)) {
        elementOfCart.amount += 1;
        elementOfCart.price =
          findProduct(elementOfCart.id) *
          elementOfCart.amount;
        return {
          ...state,
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };

    case 'REMOVE_FROM_CART':
      if (action.payload.amount !== 1) {
        elementOfCart.price -= findProduct(
          action.payload.id
        );
        elementOfCart.amount -= 1;
        return {
          ...state,
        };
      } 
        return {
          ...state,
          cart: [...state.cart.filter((e) => e.id !== action.payload.id)],
        };
      

    case 'FETCH_DATA':
      return {
        ...state,
        cart: [],
        products: [...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
