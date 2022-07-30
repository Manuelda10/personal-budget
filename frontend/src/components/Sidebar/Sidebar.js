import React from 'react'
import Balance from './Balance'
import Navigator from './Navigator'
import roundNumber from '../../helpers/roundNumber'
import './Sidebar.css'

const Sidebar = ({ transactions }) => {

    let positiveAmount = 0
    let negativeAmount = 0

    transactions.forEach(transaction => {
        if (transaction.typeId === 1) {
            positiveAmount += transaction.amount
        } else {
            negativeAmount += transaction.amount
        }
    })
    let total = roundNumber(positiveAmount - negativeAmount)

    return (<div className='sidebar menu' >
        <Balance total={total}></Balance>
        <Navigator></Navigator>
    </div>)
}

export default Sidebar



