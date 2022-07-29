import React, {useEffect, useState} from 'react'
import Transaction from '../../components/Transaction/Transaction'
import { ReactComponent as IconAdd } from '../../assets/icons/add.svg'

import getTransactions from '../../services/transaction/getTransactions'
import './index.css' 

const TransactionsPage = () => {

    const [transactions, setTransactions] = useState([])
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])

    const handleGetTransactions = () => {
        getTransactions().then(data => setTransactions(data))
    }

    useEffect(() => {
        handleGetTransactions()
    },[])


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
                {
                    transactions.map(transaction => {
                        return (
                            <Transaction
                                key = {transaction.id}
                                id ={ transaction.id}
                                concept={transaction.concept}
                                amount={transaction.amount}
                                date={transaction.date}
                                categoryId={transaction.categoryId}
                                typeId = {transaction.typeId}
                            > </Transaction>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default TransactionsPage
