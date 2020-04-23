import React from 'react'
import Modal from './Modal'

export default function Loading(props) {
    return (
        <>
            {props.show && <Modal>
                <div style={{
                    color:'#ccc',
                    fontSize:'3em'
                }}>
                加载中哦.... 
                </div>   
            </Modal>}
        </>
    )
}