import {ADD_NEWSPAPER_TO_FILTER, REMOVE_NEWSPAPER_FROM_FILTER} from "../actions";

export const  newspaperFilterReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_NEWSPAPER_TO_FILTER:
            if(state.includes(action.newspaper)) return state;
            return state += action.newspaper;
        case REMOVE_NEWSPAPER_FROM_FILTER:
            console.log('remove newspaper', action);
            const reg = new RegExp(action.newspaper, 'gi');
            return state.replace(reg, '');
        default:
            return state;
    }
};