import React from 'react'
import {ReactComponent as CloseIcon} from '../../assets/icons/xicon.svg'
import './index.css'

const TransactionUpdate = ({onClose}) => {
    return (
        <div className='transaction-update'>
            <h2>Transaction Update</h2>
            <div className='transaction-update-row'>
                <div className='concept-container'>
                    <label>Concept of payment: <br></br> <input className='input-concept' type='text'></input></label>
                </div>
            </div>

            <div className='transaction-update-row'>
                <div className='transaction-update-col'>
                    <label>Amount: <br></br> <input className='input-number' type='number'></input></label>
                </div>
                <div className='transaction-update-col'>
                    <label>Date: <br></br><input className='input-date' type='date'></input></label>
                </div>
            </div>

            <div className='transaction-update-row'>
                <div className='transaction-update-col'>
                    <label>Type: </label><br></br>
                    <select>
                        <option>Income</option>
                        <option>Expenses</option>
                    </select>
                </div>

                <div className='transaction-update-col'>
                    <label>Category: </label><br></br>
                    <select>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                    </select>
                </div>
            </div>
            
            
            <button className='save-btn'>Save</button>
            <button onClick={onClose} className='close-btn'><CloseIcon className='close-icon'></CloseIcon></button>
        </div>
    )
}

export default TransactionUpdate