import React from 'react'
import Card from '../../components/Card/Card'
import './index.css'

const Overview = () => {
    return (
        <div className='overview'>
            <div className='overview-info'>
                <h2>Income and Expenses</h2>
                <Card income={true} ></Card>
                <Card income={false}></Card>
            </div>
            <div className='overview-history'>
                <h3>Income and Expenses</h3>
            </div>
        </div>
    )
}

export default Overview