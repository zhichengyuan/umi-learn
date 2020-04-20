/**
 * title: 登录页
 */
import React,{useRef} from 'react'
import router from 'umi/router'

export default function login() {
    const txtLoginId = useRef();
    const txtLoginPwd = useRef();
    return (
        <div>
            <p>
                账号：<input ref={txtLoginId} type="text"/>
            </p>
            <p>
                密码：<input ref={txtLoginPwd} type="password"/>
            </p>
            <p>
                <button onClick={() => {
                    if(txtLoginPwd.current.value === '123') {
                        //登录成功
                        //b保存账号
                        localStorage.setItem('loginId',txtLoginId.current.value);
                        router.push('/welcome')
                    }else {
                        alert('账号/密码错误')
                    }
                }}>登录</button>
            </p>
        </div>
    )
}
