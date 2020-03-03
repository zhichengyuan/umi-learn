import React from 'react'

export default function layout(props) {
    return (
        <div>
            <div>
                <h2>sub页面通用的子菜单</h2>
            </div>
            {props.children}
        </div>
    )
}
