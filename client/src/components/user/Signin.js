import React, {useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from 'react-router-dom'
// import { Redirect } from 'react-router-dom';
import {AuthContext} from '../../context/auth.context'


export default function Signin() {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
      email: '', password: ''
    })
       
    const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
       
    
   const signinHandler  = e => {
      e.preventDefault();
      // let user = {        
      //   email: this.state.email,
      //   password: this.state.password
      // };
      try {     
        console.log('etot', {...form})      
        axios       
        .post(`/api/signin`, {...form})   
        .then(res => {
          // const candidate = res.data.message
          // const {email, name, _id} = candidate
          // localStorage.setItem('userName', name)  //may be use global context
          // localStorage.setItem('email', email)     
        //  this.setState({isLogged: true})  
       console.log('user', 'id', res.data.message._id, 'token', res.data.token)   
       auth.login(res.data.token, res.data.message._id)
        })
        .catch(err => console.log(err));
              
      } catch (e) {
        console.log(e)
      }     
      
      };
             
    
    
        return (
          <>
       
        <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label htmlFor="inputEmail" className="sr-only"> Email address
                </label>
                <input type="email" name="email" onChange={changeHandler} id="inputEmail" className="form-control" placeholder="Email address"  value={form.email} required  />
                <label htmlFor="inputPassword" className="sr-only"> Password</label>
                <input type="password" name="password" onChange={changeHandler} id="inputPassword" className="form-control" placeholder="Password"  value={form.password} required />
                <button className="btn btn-lg btn-primary btn-block" onClick={signinHandler} type="submit"> Sign in</button>
                <Link to="/registration"><button  className="btn btn-lg btn-primary btn-block buttonsInReg">or you create an account?</button></Link>

            </form>
              {/* <Redirect
              to={{
                pathname: this.state.isLogged ? '/' : '/signin'            
              }}
            /> */}
          </>
        );
    
}