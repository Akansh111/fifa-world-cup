import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Search from './containers/Search/Search'

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const routing = (
    <Provider store={store}>
       <Search />
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));
