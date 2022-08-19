import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
export const cartData = (data = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART_CONDITION", action);
            //add to card logic
            return [...data, action.data]
        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART_CONDITION", action);
            // data.length = data.length ? data.length - 1 : [];
            const remainingItem = data.filter((item) => item.id !== action.data);
            console.log("remaining item", remainingItem);
            return [...remainingItem]
        case EMPTY_CART:
            console.warn("EMPTY_CART_CONDITION", action);
            data = []
            //add to card logic
            return [...data]

        default:
            //no case matched
            return data;

    }

}