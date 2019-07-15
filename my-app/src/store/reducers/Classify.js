import {classify} from '../state/Classify';

export default function (state = classify,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'CHANGE_CLASSIFY'){
        state = payload.classify
    }
    return state;
}