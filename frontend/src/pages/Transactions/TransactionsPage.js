import React from 'react'
import Transaction from '../../components/Transaction/Transaction'
import { ReactComponent as IconAdd } from '../../assets/icons/add.svg'
import './index.css' 

const TransactionsPage = () => {
    return (
        <div className='transactions-page' >
            <div className='transactions-page-title' >
                <h2>My Transactions</h2>
            </div>
            
            <div className='transactions-page-menu'>
                <button>New Operation <IconAdd className='icon-menu'></IconAdd></button>

                <div className='filter-container'>
                    <label>
                        Filter by type: 
                    </label>
                    <select name='type' id='type-select'>
                        <option value={''}>Income</option>
                        <option value={''}>Expenses</option>
                    </select>
                </div>

                <div className='filter-container'>
                    <label>
                        Filter by category: 
                    </label>
                    <select name='category' id='category-select'>
                        <option value={''}>Category 1</option>
                        <option value={''}>Category 2</option>
                        <option value={''}>Category 3</option>
                        <option value={''}>Category 4</option>
                        <option value={''}>Category 5</option>
                        <option value={''}>Category 6</option>
                    </select>
                </div>
            </div>

            <div className='transactions-page-content'>
                <Transaction income={true} ></Transaction>
                <Transaction income={true} ></Transaction>
                <Transaction income={false} ></Transaction>
                <Transaction income={true} ></Transaction>
                <Transaction income={false} ></Transaction>
                <Transaction income={true} ></Transaction>
                <Transaction income={false} ></Transaction>
            </div>
        </div>
    )
}

export default TransactionsPage
