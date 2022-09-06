import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import classes from '../styles/MobileModal.module.css';

const MobileMenuModal = ({ menuOpen, setMenuOpen}) => {
    const {currentUser, logout}= useAuth();
  return (
    menuOpen && <div className={classes.modal}>
                    <div className={classes.mobile_menu_nav}>
                        <div onClick={()=> setMenuOpen(false)}>
                            <NavLink to='/add_product' >
                                <p>Add Product</p>
                            </NavLink>
                        </div>
                        <div onClick={()=> setMenuOpen(false)}>
                            <NavLink to='/contact_us' ><p>Contact Us</p></NavLink>
                        </div>
                        <div onClick={()=> setMenuOpen(false)}>
                            <NavLink to='/my_order' >
                                <p>My Order</p>
                            </NavLink>
                        </div>
                        {currentUser?(                       
                            <div className={classes.signin} onClick={logout}>                           
                                <p>Sign Out</p>
                                <FontAwesomeIcon  icon={faSignOut}/>
                            </div>
                            
                        ):(
                            <div className={classes.signin} onClick={()=> setMenuOpen(false)}>
                                <NavLink to='/login' ><p>Sign in</p></NavLink>
                            </div>                 
                        )}     
                    </div> 
                </div>
  )
}

export default MobileMenuModal