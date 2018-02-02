import React from 'react'
import ReactDOM from 'react-dom'


// 引入组件
import App from './app'

//引入路由
import { BrowserRouter } from 'react-router-dom'

//引入store 
import storeReducer from './js/store/login/reducer'
import {Provider} from 'react-redux'
import {createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


const storeS = createStore(
    storeReducer,
    window.REDUX_STATE,
    applyMiddleware(thunk)
)


ReactDOM.render(
    <Provider store={storeS}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
)