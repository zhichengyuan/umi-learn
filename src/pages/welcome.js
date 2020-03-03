/**
 * title: 欢迎页
 * Routes:
 *      - ./src/routes/PrivateRouter.js
 *      - ./src/routes/HandleTitle.js
 */
import React from 'react'
import router from 'umi/router'

export default function welcome() {
    const loginId = localStorage.getItem('loginId');
    return (
        <div>
            欢迎你，{loginId}
            <button onClick={() => {
                localStorage.removeItem('loginId');
                router.push('/login');
            }} >注销</button>
        </div>
    )
}
