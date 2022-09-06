import classes from "../../styles/Signup.module.css";
import imageSignup from "../../images/signup.svg";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import Textinput from "../Textinput";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext';
import { useState } from "react";
import { faUserAlt, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";


export default function Signup() {
  const [userName, setUserName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");
  const [confirmPassword, setConfirmPassword]= useState("");
  const [agree, setAgree]= useState();
  const [error, setError]= useState("");
  const [loading, setLoading]= useState("");
  const {signup}= useAuth()
  const navigate= useNavigate();
  async function handleSubmit(e){
      e.preventDefault();
      //password validation
      if(password !== confirmPassword){
        return setError("Password Does Not Match")
      }
      try{
          setError("");
          setLoading(true)
          await signup(email, password, userName);
          navigate('/')

      }catch(err){
          setLoading(false)
          setError("Failed to Sign Up, Please Resubmit Form")
        }
        
          
      }

  return (
    <>
      
      <div className="column">
        <Illustration image= {imageSignup}/>
        <div>
          <h1>Create an account</h1>
          <Form className={classes.signup} action="#" onSubmit={handleSubmit} >
            <Textinput type="text" placeholder="Enter Name" icon={faUserAlt}
              value={userName} onChange={(e)=> (setUserName(e.target.value))}/>
            <Textinput
              type="email"
              placeholder="Enter Email"
              icon={faEnvelope}
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <Textinput type="password" placeholder="Enter password" icon={faLock}
              value={password} onChange={(e)=> (setPassword(e.target.value))}/>
            <Textinput
              type="password"
              placeholder="Confirm Password"
              icon={faLock}
              value={confirmPassword} 
              onChange={(e)=> setConfirmPassword(e.target.value)}
            />
            <Checkbox label="I agree to the Terms &amp; Conditions"
              value={agree} onChange={(e)=> setAgree(e.target.value)}/>
            {error && <span className="error" >{error}</span>}
            <Button type="submit" disabled={loading} btnText='Sign Up' classname={classes.button} ></Button>
            <div className="info">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
          </Form>
        </div>
        
      </div>
      <Outlet/>
    </>
  );
}
