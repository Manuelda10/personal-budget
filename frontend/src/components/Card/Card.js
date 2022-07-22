import React from 'react'
import { ReactComponent as IncomesIcon } from '../../assets/icons/incomes.svg'
import {ReactComponent as ExpensesIcon} from '../../assets/icons/expense.svg'

import './index.css'

const Card = ({ income }) => {
    return (
        <div className='card'>
            <h3 className='card-title'>
                {
                    income ? 'Income' : 'Expenses'
                }
            </h3>
            <div className='card-content'>
                <div className={`card-info-container ${income ? 'income' : 'expense'}`}>
                    <p>Amount</p>
                    <h2>$25.000</h2>
                </div>
                <div className='card-icon-container'>
                    <div className='circle'>
                        {
                            income
                                ? <IncomesIcon className='card-icon income'></IncomesIcon>
                                : <ExpensesIcon className='card-icon expense'></ExpensesIcon>
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card