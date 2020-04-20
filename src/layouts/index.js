import React from 'react'
import NavLink from 'umi/NavLink'
import './index.css'
import linkStyles from '@/assets/css/link.css'

export default function index(props) {
    // const config = props.route.routes.find(config => config.path === props.location.pathname)
    
    // var title = '无标题';
    // if(config && config.title) {
    //     title = config.title;
        
    // }
    // document.title = title;
    return (
        <div>
            <NavLink exact  to='/'>首页</NavLink>
            <NavLink  to='/login'>登录页</NavLink>
            <NavLink  to='/welcome'>欢迎页</NavLink> 
            <NavLink  to='/counter'>计数器counter</NavLink> 
            <div>
                {props.children}
            </div>
        </div>
    )
}
