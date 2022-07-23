import React from 'react'
import './Sidebar.css'
import { ReactComponent as OverviewIcon } from '../../assets/icons/overview.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import {ReactComponent as SettingsIcon} from '../../assets/icons/settings.svg'



const Navigator = () => {
    return (
        <div className='navigator'>
            <ul>
                <li><a href="#" >
                    <div className='navlink-div' >
                        <OverviewIcon className='navlink-icon'></OverviewIcon>Overview</div>
                </a></li>
                <li><a href="#" >
                    <div className='navlink-div'>
                        <EditIcon className='navlink-icon'></EditIcon>Trnasactions
                    </div>
                </a></li>
                <li><a href="#">
                    <div className='navlink-div'>
                        <SettingsIcon className='navlink-icon'></SettingsIcon>Settings
                    </div>
                </a></li>
            </ul>            
        </div>
    )
}

export default Navigator