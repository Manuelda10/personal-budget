import React from 'react'
import Item from './Item'
import './index.css'

const Activity = () => {
    return (
        <div className='activity-container' >
            <div className='items-container'>
                <Item income={true}></Item>
                <Item income={true}></Item>
                <Item income={false}></Item>
                <Item income={false}></Item>
                <Item income={false}></Item>
                <Item income={false}></Item>
                <Item income={true}></Item>
                <Item income={true}></Item>
                <Item income={true}></Item>
                <Item income={true}></Item>
            </div>  
        </div>
    )
}

export default Activity