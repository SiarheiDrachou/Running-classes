import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducers from './redux/reducers/RootReducers'
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

    const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);