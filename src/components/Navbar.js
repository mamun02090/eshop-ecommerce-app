
import Search from './Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartShopping, faSignOut } from '@fortawesome/free-solid-svg-icons';
import classes from '../styles/Navbar.module.css';
import logo from '../images/logo.png'
import LinkedImage from './LinkedImage';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCartHandle } from '../contexts/CartHandleContext';
export default function Navbar({className}){
    const {currentUser, logout}= useAuth();
    const {cartQuantity}= useCartHandle()
    return(
        <nav className={`main_navbar ${className} ${classes.mainNav}`}>
            <div className={`${classes.navitem} ${classes.firstItem}`}>
                <LinkedImage image={logo} link='/' classname={classes.logo}/>
                <Search className={classes.navSearch}/>
            </div>
            <div className={`${classes.navitem} ${classes.secondItem}`}>
                <NavLink to='/contact_us'>
                    <p>Contact Us</p>
                </NavLink>
                <NavLink to='/my_order'>
                    <p>Order</p>
                </NavLink>
                {currentUser?(
                    <>
                        <NavLink to='/cart'>
                            <div className={classes.cart_nav}>
                                <FontAwesomeIcon  icon={faCartShopping} />
                                <span className={classes.cart_quantity}>{cartQuantity}</span>
                            </div>
                        </NavLink>
                        <div className={classes.signin}>                           
                            <p>{currentUser.displayName}</p>
                            <FontAwesomeIcon onClick={logout} icon={faSignOut}/>
                        </div>
                    </>
                        
                ):(
                    <>
                        <NavLink to='/login'>Cart</NavLink>
                        <div className={classes.signin}>
                            <NavLink to='/login'><p>Sign in</p></NavLink>
                        </div>
                    </>                  
                )}
            </div>
        </nav>
    )
}