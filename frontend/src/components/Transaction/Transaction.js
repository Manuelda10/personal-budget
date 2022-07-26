import React, { useState } from 'react'
import { ReactComponent as IconEdit } from '../../assets/icons/update.svg'
import { ReactComponent as IconDelete } from '../../assets/icons/delete.svg'
import Modal from '../Modal/Modal'
import './index.css'
import TransactionUpdate from '../TransactionUpdate/TransactionUpdate'

const Transaction = ({ income }) => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (<div className='transaction'>
        <div className='transaction-info'>
            <h4>Concepto de pago</h4>
            <p className={`transaction-amount ${income ? 'income' : ''}`} >Amount</p>
            <p className='transaction-date'>Date</p>
        </div>
        <div className='transaction-manage'>
            <p>Category</p>
            <div className='transaction-btns-container' >
                <button onClick={handleOpenModal} ><IconEdit className='icon-transaction edit'></IconEdit></button>
                <button><IconDelete className='icon-transaction'></IconDelete></button>
            </div>         
        </div>
        {
            showModal
            && <Modal>
                    <TransactionUpdate onClose={handleCloseModal} ></TransactionUpdate>
                </Modal>
        }
    </div>)
}

export default Transaction