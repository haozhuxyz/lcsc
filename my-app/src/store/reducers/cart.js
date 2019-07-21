import {ADD_TO_CART,UPDATE_CART,DELETE_FROM_CART,ADD_NUM,REDUCE_NUM,CHANGE_CHECK} from "../actions/cart"


const initState = {
    cart:[
        /*{
            product:"bread 700g",
            quantity:2,
            unitCost:9,
            id:1
        },
        {
            product:"milk 500ml",
            quantity:1,
            unitCost:3,
            id:2
        }*/
    ]
}

//reducer方法 cartReducer

export default function(state=initState,action){
    switch(action.type){
        case ADD_TO_CART:{
            return {
                //输出新的state
                ...state,
                //新增数据从action.payload中取出
                cart:[...state.cart,action.payload]
            }
        }

        case UPDATE_CART:{
            return {
                ...state,
                cart:state.cart.map(item=>item.product===action.payload.product?action.payload:item)
            }
        }

        case DELETE_FROM_CART:{
            return {
                ...state,
                cart:state.cart.filter(item=>item.product!==action.payload.product)
            }
        }

        case ADD_NUM:{
            return {
                ...state,
                cart:state.cart.filter(item=>item.shopId===action.payload.shopId?item.quantity+=action.payload.num:item)
            }
        }

        case REDUCE_NUM:{
            return {
                ...state,
                cart:state.cart.filter(item=>item.shopId===action.payload.shopId?item.quantity-=action.payload.num:item)
            }
        }

        case CHANGE_CHECK:{
            return {
                ...state,
                cart:state.cart.filter(item=>item.shopId===action.payload.shopId?item.mychecked+=action.payload.num:item)
            }
        }

        default:
            return state
    }
}