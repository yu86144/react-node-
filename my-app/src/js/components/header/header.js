import React,{Component} from 'react'
import Nav from '../../components/nav/nav'
import '../../../scss/views/header.scss'

class Header extends Component{
    render(){
        return (
            <div className="header">
                <span>头部</span>
                <Nav />
            </div>
        )
    }
}
export default Header