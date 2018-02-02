import React, { Component } from 'react'

//引入组件
import Index from './js/views/index/index'
import News from './js/views/news/news'
import Swiper from './js/views/swiper/swiper'

//引入样式
import './scss/base.scss'

// 引入路由
import { Switch, Route } from 'react-router-dom';



class App extends Component {

    render() {
        return (
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/news" component={News} />
                    <Route path="/swiper" component={Swiper} aa={'asd'}/>
                </Switch>
        )
    }
}
export default App