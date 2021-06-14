import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Modal = ({ header, closeModal, children}) => {
    return (
        ReactDOM.createPortal(
            <div className={classes.backdrop} onClick={closeModal}>
                <div className={classes.modaldialog} onClick={e => e.stopPropagation()}>
                    <div className={classes.header}>
                        {header}
                    </div>
                    <div className={classes.children}>
                        {children}
                    </div>
                </div>
            </div>
            , document.querySelector('#modal'))
    );
};

export default Modal;