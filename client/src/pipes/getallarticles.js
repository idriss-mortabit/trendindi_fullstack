import {receiveArticles} from './../actions/index';
import axios from 'axios';

export const getAllArticles = () => (dispatch) => {
    axios.get("/api/get/articles").then(response =>{
          console.log("My api response", response.data)
          dispatch(receiveArticles(response.data))
        })
      .catch(err=> {
        dispatch({type: 'FETCH_ARTICLES_ERROR', payload: err})

      })
  }