import React from 'react'
import { ReactComponent as IconEdit } from '../../assets/icons/update.svg'
import { ReactComponent as IconDelete} from '../../assets/icons/delete.svg'
import './index.css'

const Transaction = ({ income }) => {
    return (<div className='transaction'>
        <div className='transaction-info'>
            <h4>Concepto de pago</h4>
            <p className={`transaction-amount ${income ? 'income' : ''}`} >Amount</p>
            <p className='transaction-date'>Date</p>
        </div>
        <div className='transaction-manage'>
            <p>Category</p>
            <div className='transaction-btns-container' >
                <button><IconEdit className={`icon-transaction ${income ? 'income' : ''}`}></IconEdit></button>
                <button><IconDelete className='icon-transaction'></IconDelete></button>
            </div>         
        </div>

    </div>)
}

export default Transaction