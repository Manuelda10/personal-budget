import React from 'react'
import { ReactComponent as IconCheck } from '../../assets/icons/check.svg'
import {ReactComponent as XIcon} from '../../assets/icons/xicon.svg'
import './index.css'

const Item = ({ income }) => {
    return (
        <div className='activity-item' >
            <div className='icon-container'>
                <div className={`circle-div ${income ? '' : 'expense'}`}>
                    {
                        income
                            ? <IconCheck className='icon-item'></IconCheck>
                            : <XIcon className='icon-item'></XIcon>
                    }
                    
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