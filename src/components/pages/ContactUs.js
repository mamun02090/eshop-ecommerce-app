import classes from "../../styles/ContactUs.module.css";
import Button from "../Button";
import Form from "../Form";
import Textinput from "../Textinput";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { faUserAlt, faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import TextArea from "../TextArea";
import Headings from "../Headings";


export default function ContactUs() {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [message, setMessage]= useState();
  const [number, setNumber]= useState()
  const navigate= useNavigate();
  function handleSubmit(){

  }

  return (
    <div className={classes.contact_main}> 
        <Headings heading='Contact with Us' className={classes.heading}/>
        <Form className={classes.add_product} action="#" onSubmit={handleSubmit}>
            <div className="column">
                 <div className={classes.contact_input}>
                    <Textinput
                            type="text"
                            placeholder="Enter Name"
                            icon={faUserAlt}
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                    />
                    <Textinput
                            type="email"
                            placeholder="Enter Email"
                            icon={faEnvelope}
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                    />                       
                    </div>
                    <div className={classes.contact_input}>
                        <Textinput
                            type="email"
                            placeholder="Enter Number"
                            icon={faPhone}
                            value={number}
                            onChange={(e)=> setNumber(e.target.value)}
                        />
                        <TextArea className={classes.message_input} type='text' placeholder='Write Message...' onChange={(e)=>(setMessage(e.target.value))} value={message} />
                        <Button btnText='Submit' type='submit'classnamediv={classes.contact_button_div} classname={classes.contact_button}/>
                        
                    </div>                   
                </div>
                
            </Form>
      <Outlet/>
    </div>
  );
}
