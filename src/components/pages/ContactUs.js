import classes from "../../styles/ContactUs.module.css";
import Button from "../Button";
import Form from "../Form";
import Textinput from "../Textinput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { faUserAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import TextArea from "../TextArea";
import Headings from "../Headings";


export default function ContactUs() {
  const [user, setUser]= useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const navigate= useNavigate();
  async function handleSubmit(e){
   alert("successflly submitted");
   navigate("/")
  }
    
let name, value;
  const onChange=(e)=>{
     name= e.target.name;
     value= e.target.value;
      setUser((prev)=>({...prev, [name]: value}))
  }
  return (
    <div className={classes.contact_main}> 
        <Headings heading='Contact with Us' className={classes.heading}/>
        <Form className={classes.add_product} action="#"  onSubmit={(e)=> handleSubmit(e)}>
            <div className="column">
                 <div className={classes.contact_input}>
                    <Textinput
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            icon={faUserAlt}
                            value={user.name}
                            onChange={(e)=> onChange(e)}
                    />
                    <Textinput
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            icon={faEnvelope}
                            value={user.email}
                            onChange={(e)=> onChange(e)}
                    />                       
                    </div>
                    <div className={`${classes.phone_number} ${classes.contact_input}`}>
                        <Textinput
                            type="number"
                            name="phone"
                            placeholder="Enter Number"
                            icon={faPhone}
                            value={user.number}
                            onChange={(e)=> onChange(e)}
                        />
                        <TextArea className={classes.message_input} type='text' name="message"
                        placeholder='Write Message...' onChange={(e)=>onChange(e)} value={user.message} />
                        <Button btnText='Submit' type='submit'classnamediv={classes.contact_button_div} classname={classes.contact_button}/>
                        
                    </div>                   
                </div>
                
            </Form>
    </div>
  );
}
