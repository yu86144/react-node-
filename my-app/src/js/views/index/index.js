import React,{Component} from 'react'

//引入组件
import Header from '../../components/header/header'

//引入store 
import {connect} from 'react-redux'
import {getData,ADD} from '../../store/login/actions'

// import aa from '../../../images/3.jpg'

class Index extends Component{

    componentDidMount(){
        // this.props.getData()
    }
    
    renderLi(){
        let {dataAll} = this.props
        if(!dataAll.length) return false
        return dataAll.map((item,index) => {
            return (
                <li key={index}>{item}</li>
            )
        })
    }

    add(){
        this.props.ADD()
    }

    render() {
        return (
            <div>
                <Header />
                首页
                <div>
                    {/* <img src={require('../../../images/3.jpg')} alt="asdasd"/> */}
                </div>
                <div className="img">

                </div>
                <ul>
                    {this.renderLi()}
                </ul>
                <button onClick={this.add.bind(this)}>添加</button>
            </div>
        )
    }
}

Index = connect(
    (state) => {
        return {
            dataAll: state.data
        }
    },
    {
        getData,
        ADD
    }
)(Index)

export default Index