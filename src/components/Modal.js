import React from 'react'
import classes from '../styles/Modal.module.css'
const Modal = ({children, open, className}) => {
    if(!open) return null;
  return (
      <>
        <div  className={`${classes.modal_overlay} ${className}`}></div>
        <div>{children}</div>
      </>
    
  )
}

export default Modal