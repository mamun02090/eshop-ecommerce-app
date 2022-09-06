
import '../styles/style.css'
export default function Button({style, btnText, type, classname, classnamediv, buttonclickhandle, disable, stock}){

    return(
            <div className={classnamediv}>
                <button style={style} type={type} className={`btn ${classname}`} disabled={disable}  onClick={buttonclickhandle?(e)=>buttonclickhandle(e, stock):null}>{btnText}</button>
                
            </div>
              

    )
}