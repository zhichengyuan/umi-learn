import React from 'react'
import withcRouter from 'umi/withRouter'

function A(props) {
    return (
        <div>
           {props.location.pathname} 
        </div>
    )
}

export default withcRouter(A)
