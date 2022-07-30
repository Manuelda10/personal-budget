import React from 'react'
import Activity from '../../components/Activity/Activity'
import Profile from '../../components/Profile/Profile'
import Card from '../../components/Card/Card'
import roundNumber from '../../helpers/roundNumber'
import './index.css'

const Overview = ({ transactions }) => {
    
    let positiveAmount = 0
    let negativeAmount = 0

    transactions.forEach(transaction => {
        if (transaction.typeId === 1) {
            positiveAmount += transaction.amount
        } else {
            negativeAmount += transaction.amount
        }
    })

    return (
        <div className='overview'>
            <div className='overview-info'>
                <div className='overview-info-raw'>
                    <div className='overview-chart'>
                        <p>Represento a un chart</p>
                    </div>
                    <div className='overview-chart'>
                        <p>Represento a un chart</p>
                    </div>
                </div>
                <div className='overview-info-raw'>
                    <div className='overview-card-container'>
                        <Card income={true} amount={roundNumber(positiveAmount)} ></Card>
                    </div>
                    <div className='overview-card-container'>
                        <Card income={false} amount={roundNumber(negativeAmount)} ></Card>
                    </div>
                </div>
                <div className='overview-info-raw'>
                    <div className='overview-chart-large'>
                        <p>Represento al chart más grand0 t más grande t más grande t más grande t más grandee</p>
                    </div>
                </div>
            </div>
            <div className='overview-history'>
                <h3>User</h3>
                <Profile></Profile>
                <h3>Transactions</h3>
                <Activity transactions={transactions} ></Activity>
            </div>
        </div>
    )
}

export default Overview