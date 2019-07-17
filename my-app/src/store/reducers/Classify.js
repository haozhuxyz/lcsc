import {classify} from '../state/Classify';

export default function (state = classify,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'CHANGE_CLASSIFYLIST'){
        state.list = payload.classifyList
    }
    if(type === 'CHANGE_CLASSIFTSHOPLIST'){
        state.shopList.cate = payload.shopListCate
        state.shopList.brand = payload.shopListBrand
    }
    return state;
}