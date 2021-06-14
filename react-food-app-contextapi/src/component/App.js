import React, { useState } from 'react'
import Modal from './Modal'
import AppProvider from '../context/appProvider'
import MenuList from './MenuList'
import Cart from './Cart'


const App = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <AppProvider>
            <div onClick={handleOpenModal}>
                <MenuList />
                <Cart />
            </div>
            {openModal && <Modal header="Your Cart" closeModal={handleCloseModal}>

                </Modal>}
        </AppProvider>
    );
}

export default App;