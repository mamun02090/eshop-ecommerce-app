
import '../styles/style.css'
import Menu from "./Menu";


export default function Layout({children}){
    return(
            <div className="container">
                <div className="contents">
                    <Menu className='menu_display'/>
                     {children}
                </div>
            </div>
    )
}