import React from 'react'
import Item from './Item'
import './index.css'

const Activity = () => {
    return (
        <div className='activity-container' >
            <Item income={true}></Item>
            <Item income={true}></Item>
            <Item income={false}></Item>
        </div>
    )
}

export default Activity