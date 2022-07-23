import React from 'react'
import './index.css'

const Transaction = ({ income }) => {
    return (<div className={`transaction ${income ? 'income' : ''}`}>
        <div className='transaction-info'>
            <h4>Concepto de pago</h4>
            <p>Amount</p>
            <p>Date</p>
        </div>
        <div className='transaction-manage'>
            <p>Category</p>
            <div className='transaction-btns-container' >
                <button>Update</button>
                <button>Delete</button>
            </div>         
        </div>

    </div>)
}

export default Transaction