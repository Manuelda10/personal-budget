import React from 'react'
import Balance from './Balance'
import Navigator from './Navigator'
import './Sidebar.css'

const Sidebar = () => {
    return (<div className='sidebar menu' >
        <Balance></Balance>
        <Navigator></Navigator>
    </div>)
}

export default Sidebar



