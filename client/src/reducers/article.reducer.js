import {
    ADD_ARTICLE_TO_CART,
    DECREMENT_CART_ARTICLE_QUANTITY,
    INCREMENT_CART_ARTICLE_QUANTITY,
    REMOVE_ARTICLE_FROM_CART,
    RECEIVE_ARTICLES,
    ADD_KEYWORD_TO_CART
} from '../actions';

export const initialState = {
    articles: [],
    cart: [],
    keywords:[]
};


const articleReducer = (state = initialState, action ) => {
    let updatedCart;
    let items;
    let updatedItemIndex;

    switch (action.type) {
        case RECEIVE_ARTICLES:
            items = action.payload
            state.articles = items
            return {...state};
        case INCREMENT_CART_ARTICLE_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;


            return {...state, cart: updatedCart};
        case DECREMENT_CART_ARTICLE_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return {...state, cart: updatedCart};
        case ADD_ARTICLE_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item._id === action.payload._id);

            if(updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1});
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};
        case ADD_KEYWORD_TO_CART:
            updatedCart = [...state.keywords];
            updatedItemIndex = updatedCart.findIndex(item => item.keyword === action.payload);

            if(updatedItemIndex < 0) {
                updatedCart.push({keyword: action.payload, quantity: 1});
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, keywords: updatedCart};
        case REMOVE_ARTICLE_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return {...state, cart: updatedCart};
        default:
            return state;
    }
};

export default articleReducer;