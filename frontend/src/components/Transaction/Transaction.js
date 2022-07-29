import React, { useEffect, useState } from 'react'
import { ReactComponent as IconEdit } from '../../assets/icons/update.svg'
import { ReactComponent as IconDelete } from '../../assets/icons/delete.svg'
import Modal from '../Modal/Modal'
import './index.css'
import { TransactionUpdate } from '../TransactionUpdate/TransactionUpdate'
import getOneCategory from '../../services/category/getOneCategory'

const Transaction = ({ id, concept, amount, date, categoryId, typeId}) => {

    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState('')

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleGetCategory = (id) => {
        getOneCategory(id).then(cat => setCategory(cat.name))
    }

    useEffect(() => {
        handleGetCategory(categoryId)
    }, [categoryId])

    return (<div className='transaction'>
        <div className='transaction-info'>
            <h4>{concept}</h4>
            <p className={`transaction-amount ${typeId === 1 ? 'income' : ''}`} >
                { typeId === 1 ? '+' : '-'
                }{amount}
            </p>
            <p className='transaction-date'>{date}</p>
        </div>

        <div className='transaction-manage'>
            <p className='transaction-category'>{category}</p>
            <div className='transaction-btns-container' >
                <button onClick={handleOpenModal} ><IconEdit className='icon-transaction edit'></IconEdit></button>
                <button><IconDelete className='icon-transaction'></IconDelete></button>
            </div>         
        </div>
        {
            showModal
            && <Modal>
                    <TransactionUpdate
                        initialConcept={concept}
                        initialAmount={amount}
                        initialDate={date}
                        onClose={handleCloseModal} ></TransactionUpdate>
                </Modal>
        }
    </div>)
}

export default Transaction