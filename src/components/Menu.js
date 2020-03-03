import React from 'react'
import NavLink from 'umi/NavLink'
import router from 'umi/router'

export default function Menu() {
    console.log(router);
    return (
        <div>
            <NavLink to='/'>首页</NavLink>
            <button onClick={() => {
                router.push('/sub/a')
            }}>去sub/a页</button>
            <NavLink to='/page1'>page1</NavLink>
            <button onClick={() => {
                router.push('/sub/b')
            }}>去sub/b</button>
        </div>
    )
}
