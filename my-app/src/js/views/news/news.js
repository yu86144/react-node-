import React, {Component} from 'react'
//引入组件
import Header from '../../components/header/header'

class News extends Component{
    render(){
        return (
            <div>
                <Header/>
                新闻
                <div>
                    <img src={require('../../../images/2.gif')} alt="asdasd"/>
                </div>
            </div>
        )
    }
}
export default News