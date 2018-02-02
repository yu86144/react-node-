import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                <NavLink exact to="/">
                        首页
                </NavLink>
                </li>
                <li>
                <NavLink to="/news">
                        新闻
                </NavLink>
                </li>
                <li>
                <NavLink to="/swiper">
                        轮播
                </NavLink>
                </li>
            </ul>
        )
    }
}
export default Nav