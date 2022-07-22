import React from 'react'
import Activity from '../../components/Activity/Activity'
import Profile from '../../components/Profile/Profile'
import Card from '../../components/Card/Card'
import './index.css'

const Overview = () => {
    return (
        <div className='overview'>
            <div className='overview-info'>
                <div className='overview-info-grid'>    
                    <div className='overview-chart'>
                        <p>Represento a un chart</p>
                    </div>
                    <div className='overview-chart'>
                        <p>Represento a un chart</p>
                    </div>
                    <div className='overview-card-container'>
                        <Card income={true} ></Card>
                    </div>
                    <div className='overview-card-container'>
                        <Card income={false}></Card>
                    </div>
                </div>
                <div className='overview-chart-large'>
                    <p>Represento al chart más grand0 t más grande t más grande t más grande t más grandee</p>
                </div>
            </div>
            <div className='overview-history'>
                <h3>User</h3>
                <Profile></Profile>
                <h3>Transactions</h3>
                <Activity></Activity>
            </div>
        </div>
    )
}

export default Overview