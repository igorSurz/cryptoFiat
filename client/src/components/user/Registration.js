import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function Registration() {
  const history = useHistory()
  const [form, setForm] = useState({
    name: '', email: '', password: '', password_confirmation: ''
  })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }


  const signupHandler  = e => {
    e.preventDefault();

    try {             
      axios       
      .post(`/api/signup`, {...form})   
      .then(res => {
        console.log(res.status)
       
    history.push('/')
      })
      
      
            
    } catch (e) {
      console.log(e)

    }     
    
    };
        return (
          <>
            <form className="form-signin form-logreg" onSubmit={signupHandler}>
              <h2 className="form-signin-heading">Please sign up</h2>
              <label htmlFor="inputName" className="sr-only">Name</label>
              <input type="text" name="name" onChange={changeHandler} id="inputName" className="form-control" placeholder="Name" value={form.name} required />
              
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" name="email" onChange={changeHandler} id="inputEmail" className="form-control" placeholder="Email address" value={form.email} required />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" name="password" onChange={changeHandler} id="inputPassword" className="form-control" placeholder="Password" value={form.password} required />
              <label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
              <input type="password" name="password_confirmation" onChange={changeHandler} id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" value={form.password_confirmation} required />
              
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
              {/* <Link to="/signin"><button  className="btn btn-lg btn-primary btn-block buttonsInReg">or you have an account?</button></Link> */}
           
            </form>

            <>
            </>
          </>
           
        )
      
  }
