export const ADD_ARTICLE_TO_CART = 'ADD_ARTICLE_TO_CART';
export const ADD_KEYWORD_TO_CART = 'ADD_KEYWORD_TO_CART';
export const REMOVE_ARTICLE_FROM_CART = 'REMOVE_ARTICLE_FROM_CART';
export const INCREMENT_CART_ARTICLE_QUANTITY = 'INCREMENT_CART_ARTICLE_QUANTITY';
export const DECREMENT_CART_ARTICLE_QUANTITY = 'DECREMENT_CART_ARTICLE_QUANTITY';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

export const receiveArticles = articles => {
    return {
    type: RECEIVE_ARTICLES,
    payload: articles
  }}

export const addArticleToCart = article => {
    return {
        type: ADD_ARTICLE_TO_CART,
        payload: article
    }
};

export const addKeywordToCart = keyword => {
    return {
        type: ADD_KEYWORD_TO_CART,
        payload: keyword
    }
};

export const removeArticleToCart = articleId => {
    return {
        type: REMOVE_ARTICLE_FROM_CART,
        payload: articleId
    }
};

export const incrementCartQuantity = articleId => {
    return{
        type: INCREMENT_CART_ARTICLE_QUANTITY,
        payload: articleId
    }
};

export const decrementCartQuantity = articleId => {
  return {
      type: DECREMENT_CART_ARTICLE_QUANTITY,
      payload: articleId
  }
};


export const ADD_NEWSPAPER_TO_FILTER = 'ADD_NEWSPAPER_TO_FILTER';
export const REMOVE_NEWSPAPER_FROM_FILTER = 'REMOVE_NEWSPAPER_FROM_FILTER';
export const SEARCH_TERM_TO_FILTER = 'SEARCH_TERM_TO_FILTER';


export const addNewspaperToFilter = brand => {
    return {
        type: ADD_NEWSPAPER_TO_FILTER,
        brand
    }
};


export const removeNewspaperFromFilter = brand => {
    return  {
        type: REMOVE_NEWSPAPER_FROM_FILTER,
        brand
    }
};


export const searchTermToFilter = searchTerm => {
    return {
        type: SEARCH_TERM_TO_FILTER,
        searchTerm
    }
};


export const ORDER_BY_ASC = 'ORDER_BY_ASC';
export const ORDER_BY_DESC = 'ORDER_BY_DESC';
export const CLEAR_ORDER_BY_CLICKS = 'CLEAR_ORDER_BY_CLICKS';

export const orderByAsc = () => {
    return {
        type: ORDER_BY_ASC
    }
};

export const orderByDesc =  () => {
    return {
        type: ORDER_BY_DESC
    }
};

export const clearOrderBy = () => {
    return {
        type: CLEAR_ORDER_BY_CLICKS
    }
};


export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_PAGE = 'GO_PAGE';
export const COUNT_ARTICLES = 'COUNT_ARTICLES';


export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
};

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
};

export const goPage = (n) => {
    return {
        type: GO_PAGE,
        currentPage: n
    }
};

export const countArticles = (n) => {
    return {
        type: COUNT_ARTICLES,
        totalItemsCount: n
    }
}