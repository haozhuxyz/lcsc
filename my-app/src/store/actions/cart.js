//设置type类型
export const ADD_TO_CART = "ADD_TO_CART"
export const UPDATE_CART = "UPDATE_CART"
export const DELETE_FROM_CART = "DELETE_FROM_CART"
export const ADD_NUM = "ADD_NUM"
export const REDUCE_NUM = "REDUCE_NUM"
//action行为 添加

export function addToCart(product,quantity,unitCost,shopId,imgUrl){
    return {
        type:ADD_TO_CART,
        payload:{product,quantity,unitCost,shopId,imgUrl}
    }
}

export function addNum(shopId,num){
    return {
        type:ADD_NUM,
        payload:{shopId,num}
    }
}
export function reduceNum(shopId,num) {
    return {
        type:REDUCE_NUM,
        payload:{shopId,num}
    }
}

//action 行为 修改

export function updateCart(product,quantity,unitCost,shopId,imgUrl){
    return {
        type:UPDATE_CART,
        payload:{product,quantity,unitCost,shopId,imgUrl}
    }
}

//action 行为 删除

export function deleteFromCart(product,shopId,imgUrl){
    return {
        type:DELETE_FROM_CART,
        payload:{
            product,
            shopId,
            imgUrl
        }
    }
}