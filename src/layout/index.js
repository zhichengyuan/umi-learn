import React from 'react'
// import Link from 'umi/Link' //实际上就是react-router-dom中的Link组件
// import NavLink from 'umi/NavLink' //实际上就是react-router-dom中的NavLink组件
import Menu from '@/components/Menu'

export default function index(props) {
    return (
        <div>
            <div>
                <h1>导航菜单</h1>
                <Menu></Menu>
            </div>
            {props.children}
            <div>
                <h1>页脚</h1>
            </div>
        </div>
    )
}
