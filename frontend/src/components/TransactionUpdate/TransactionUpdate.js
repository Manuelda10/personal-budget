import React, {useEffect, useState} from 'react'
import {ReactComponent as CloseIcon} from '../../assets/icons/xicon.svg'
import getCategories from '../../services/category/getCategories'
import getCategoriesByType from '../../services/category/getCategoriesByType'
import getTypes from '../../services/type/getTypes'
import './index.css'

const TransactionUpdate = ({id, initialConcept, initialAmount, initialDate, initialCategoryId, typeId, onClose }) => {
    
    const [concept, setConcept] = useState(initialConcept)
    const [amount, setAmount] = useState(initialAmount)
    const [date, setDate] = useState(initialDate)
    const [categories, setCategories] = useState([])
    const [types, setTypes] = useState([])

    const handleCategories = (id) => {
        console.log(id)
        getCategoriesByType(id).then(cat => setCategories(cat))
    }

    const handleTypes = () => {
        getTypes().then(type => setTypes(type))
    }

    const handleSubmit = () => {
        const transactionUpdated = {
            concept,
            amount,
            date
        }
        if (initialConcept !== undefined) {
            console.log("Hago un update de la nota")
        } else {
            console.log("Creo la nota")
        }
        onClose()
    }

    useEffect(() => {
        handleCategories(typeId)
        handleTypes()
    }, [typeId])

    return (
        <div className='transaction-update'>
            <h2>Transaction Update</h2>
            <div className='transaction-update-row'>
                <div className='concept-container'>
                    <label>Concept of payment: <br></br>
                        <input className='input-concept'
                            type='text'
                            value={concept}
                            onChange={e => setConcept(e.target.value)}>
                        </input>
                    </label>
                </div>
            </div>

            <div className='transaction-update-row'>
                <div className='transaction-update-col'>
                    <label>Amount: <br></br> <input
                        className='input-number'
                        type='number'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}>
                    </input></label>
                </div>
                <div className='transaction-update-col'>
                    <label>Date: <br></br><input
                        className='input-date'
                        type='date'
                        value={date}
                        onChange={e => setDate(e.target.date)}>
                    </input></label>
                </div>
            </div>

            <div className='transaction-update-row'>
                <div className='transaction-update-col'>
                    <label>Type: </label><br></br>
                    <select onChange={e => handleCategories(e.target.value)}>
                        {
                            types.map(type => {
                                return (
                                    <option key={type.id} value={type.id}>
                                        {type.name}
                                    </option>)
                           }) 
                        }
                    </select>
                </div>

                <div className='transaction-update-col'>
                    <label>Category: </label><br></br>
                    <select>
                        {
                            categories.map(cat => {
                                return (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            
            
            <button onClick={handleSubmit} className='save-btn'>Save</button>
            <button onClick={onClose} className='close-btn'><CloseIcon className='close-icon'></CloseIcon></button>
        </div>
    )
}

const TransactionCreate = ({ onClose, handleCreateTransaction }) => {
    return (
        <TransactionUpdate
            onClose={onClose}
            handleCreateTransaction={handleCreateTransaction}
            concept={undefined}>
        </TransactionUpdate>
    )
}

export { TransactionUpdate, TransactionCreate }