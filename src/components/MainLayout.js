import '../styles/style.css'
import MobileMenu from './MobileMenu'
import Navbar from './Navbar'
export default function MainLayout({children}){
    return(
        <>
            <Navbar className='nav'/>
            <MobileMenu className='mobile_nav'></MobileMenu>
            <div className="main_container">
                {children}
            </div>
        </>
        
    )
}