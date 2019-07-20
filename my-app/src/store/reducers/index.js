import  classify from './Classify';
import cartReducer from "./cart"
import productsReducer from "./products"

import {
    combineReducers
} from 'redux';
export default combineReducers({
    classify,
    cartReducer,
    productsReducer
})