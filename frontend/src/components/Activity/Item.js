import React from 'react'
import './index.css'

const Item = ({ income }) => {
    return (
        <div className='activity-item' >
            <div className='icon-container'>
                <div className={`circle-div ${income ? '': 'expense'}`}>
                    <div className='icon-circle-div'></div>
                </div>
            </div>
            <div className='info-container'>
                <p className='item-concept' >Título del depósito</p>
                <p className='item-date'>Date of deposit</p>
            </div>
            <div className='amount-container'>
                <p className={`item-amount ${income ? '':'expense'}`}>$200.25</p>
                <p className='item-exchange'>USD</p>
            </div>
        </div>
    )
}

export default Item