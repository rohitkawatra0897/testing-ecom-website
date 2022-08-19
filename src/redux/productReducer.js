import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const productData = (data = [], action) => {

    switch (action.type) {


        case SET_PRODUCT_LIST:
            console.warn("PRODUCT_LIST_CONDITION", action);
            //add to card logic
            return [...action.data]

        default:
            //no case matched
            return data;

    }

}