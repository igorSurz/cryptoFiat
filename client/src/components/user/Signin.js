import React, {useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../../context/auth.context'


export default function Signin() {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
      email: '', password: ''
    })
       
    const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
       
    
   const signinHandler  = e => {
      e.preventDefault();
  
      try {             
        axios       
        .post(`/api/signin`, {...form})   
        .then(res => {
    
       auth.login(res.data.token, res.data.message._id, res.data.message.name, res.data.message.email)
         
       history.push('/')
        })
       
              
      } catch (e) {
        console.log(e)
      }     
      
      };
             
    
    
        return (
          <>
       
        <form className="form-signin form-logreg" onSubmit={signinHandler}>
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label htmlFor="inputEmail" className="sr-only"> Email address
                </label>
                <input type="email" name="email" onChange={changeHandler} id="inputEmail" className="form-control" placeholder="Email address"  value={form.email} required  />
                <label htmlFor="inputPassword" className="sr-only"> Password</label>
                <input type="password" name="password" onChange={changeHandler} id="inputPassword" className="form-control" placeholder="Password"  value={form.password} required />
                <button className="btn btn-lg btn-primary btn-block" type="submit"> Sign in</button>
                <Link to="/registration"><button  className="btn btn-lg btn-primary btn-block buttonsInReg">or you create an account?</button></Link>

            </form>
           
          </>
        );
    
}