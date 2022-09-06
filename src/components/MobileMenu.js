import React, { useState } from 'react'
import LinkedImage from './LinkedImage';
import { NavLink } from 'react-router-dom';
import classes from '../styles/MobileMenu.module.css';
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faClose, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contexts/AuthContext';
import { useCartHandle } from '../contexts/CartHandleContext';
import MobileMenuModal from './MobileMenuModal';
import Modal from './Modal';

const MobileMenu = ({className}) => {
    const {currentUser, logout}= useAuth();
    const {cartQuantity}= useCartHandle(); 
    const [menuOpen, setMenuOpen] = useState(false)
    const menubarClickHandle=()=>{
        menuOpen?setMenuOpen(false): setMenuOpen(true)
        
    }

  return (
    <div className={className}>
        <nav className={`mobile_menu ${classes.mainNav}`}>
            <div className={`${classes.navitem_logo} `} onClick={()=> setMenuOpen(false)}>
                <LinkedImage image={logo} link='/' classname={classes.logo}/>
            </div>
            
            <div className={classes.mobile_menu_bar}>
                {currentUser?(
                        <>
                            <NavLink to='/cart' onClick={()=> setMenuOpen(false)}>
                                <div className={classes.cart_nav}>
                                    <FontAwesomeIcon  icon={faCartShopping} />
                                    <span className={classes.cart_quantity}>{cartQuantity}</span>
                                </div>
                            </NavLink>
                            
                        </>
                        
                    ):(
                        <>
                            <NavLink to='/login' onClick={()=> setMenuOpen(false)}><FontAwesomeIcon  icon={faCartShopping} /></NavLink>
                            
                        </>                  
                )}
                {menuOpen?<span className={classes.navbar_baricon}><FontAwesomeIcon icon={faClose} onClick={menubarClickHandle}/></span>:<span className={classes.navbar_baricon}><FontAwesomeIcon icon={faBars} onClick={menubarClickHandle}/></span> }
                <Modal open={menuOpen} className={classes.modal_bg}>
                    <MobileMenuModal menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                </Modal>
                
            </div>
        </nav>
    </div>
  )
}

export default MobileMenu