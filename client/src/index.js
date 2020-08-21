import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {getAllArticles} from "./pipes/getallarticles";

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
export const  store = createStore(rootReducer, applyMiddleware(...middleware));
store.dispatch(getAllArticles())


ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
