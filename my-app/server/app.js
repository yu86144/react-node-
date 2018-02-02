"use strict"

import Koa from 'koa'
import Api from './router/api/index'
import views from 'koa-views'
import path from 'path'

//解析器
import csshook from 'css-modules-require-hook/preset'  //css
import asset from 'asset-require-hook'  //图片
asset({
    extensions: ['jpg', 'png', 'gif', 'webp'],
    name: 'static/media/[name].[hash:8].[ext]',
    limit: 8000
})

import React from 'react'
import {renderToString,renderToNodeStream} from 'react-dom/server'
import { StaticRouter,match } from 'react-router'
import App from '../src/app'

import staticServer  from 'koa-static'
//webpack打包生成的静态资源文件
import  staticPath from '../build/asset-manifest.json'

//引入store 
import storeReducer from '../src/js/store/login/reducer'
import {Provider} from 'react-redux'
import {createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {getData ,ADD} from '../src/js/store/login/actions'
const storeS = createStore(
    storeReducer,
    applyMiddleware(thunk)
)

const app = new Koa()

//加载模版引擎
app.use(views(path.join(__dirname,'./views')), {
    extension: 'ejs'
})

//加载静态资源的文件
app.use(staticServer(path.join(__dirname,'../build')))

// app.use(Api.routes()).use(Api.allowedMethods())




app.use( async (ctx,next) => {
        let title = 'hello world1'
        let context = {}
        let store1 = storeS.getState()
        store1.data = [1,2,3]
        await ctx.render('index.ejs', {
            title,
            css: staticPath['main.css'],
            js: staticPath['main.js'],
            root: renderToString(
                <Provider store={storeS}> 
                    <StaticRouter location={ctx.req.url} context={context}>
                        <App />
                    </StaticRouter>
                </Provider>
            ),
            store: store1
        })
})


app.listen(8000,() => {
    console.log(`listen http://localhost:8000/`)
})