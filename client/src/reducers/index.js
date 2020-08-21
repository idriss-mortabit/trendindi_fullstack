import {combineReducers} from 'redux';
import article from './article.reducer';
import {newspaperFilterReducer} from "./newspaper.filter.reducer";
import {searchFilterReducer} from "./search.filter.reducer";
import {orderByReducer} from "./orderby.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
    article,
    newspaperFilter: newspaperFilterReducer,
    searchFilter: searchFilterReducer,
    orderBy: orderByReducer,
    pagination: paginationReducer
});