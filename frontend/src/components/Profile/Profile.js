import React from 'react'
import ProfileImg from '../../assets/img/profile_random.jpg'
import './index.css'

const Profile = () => {
    return (
        <div className='profile'>
            <img src={ProfileImg} alt='profile'></img>
            <h3>Nombre Apellido</h3>
            <p>email@yopmail.com</p>
        </div>
    )
}

export default Profile