import React from 'react'
import router from 'umi/router'
import A from '@/components/A'

export default function page1(props) {
    console.log(props);
    return (
        <div>
            <h1>page1</h1>
            <A></A>
            <button onClick={() => {
                router.push('/page2')
            }}>跳转到page2</button>
        </div>
    )
}
