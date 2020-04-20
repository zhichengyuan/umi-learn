import React from 'react'
import withcRouter from 'umi/withRouter'

function A(props) {
    return (
        <div>

           A组件：{props.location.pathname} 
        </div>
    )
}

export default withcRouter(A)
