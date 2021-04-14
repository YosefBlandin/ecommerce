import uuid from "uuid";
const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                 ...state,
                 cart: [...state.cart, {...action.payload, id: uuid()}]
             }
        case "REMOVE_FROM_CART":
            return {...state, cart: state.cart.filter(({ id }) => id !== action.payload.id)}
        default: state
    }
}



export default reducer;