import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom';


export default class Signin extends React.Component {
  
        state = {
          email:'',
          password:'',
          isLogged: false
        };
     
   
   
    handleEmailChange = e => {
        this.setState({email: e.target.value})
        
    }
    handlePasswordChange = e =>{
        this.setState({password: e.target.value})
       
    }
    handleSubmit  = e => {
      e.preventDefault();
      let user = {        
        email: this.state.email,
        password: this.state.password
      };
      try {   //https heroku required maybe
        
        axios       
        .post(`https://${process.env.REACT_APP_URL}/api/signin`, user)     //work with full localhost url and port of NOdejs
        .then(res => {
          const candidate = res.data.message
          const {email, name} = candidate
          localStorage.setItem('userName', name)
          localStorage.setItem('email', email)     
         this.setState({isLogged: true})  
         console.log(this.state.isLogged)   
       
        })
        .catch(err => console.log(err));
              
      } catch (e) {
        console.log(e)
      }     
      
      };
             
    
    render() {
        return (
          <>
       
        <form className="form-signin" onSubmit={this.handleSubmit}>
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label htmlFor="inputEmail" className="sr-only"> Email address
                </label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only"> Password</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit"> Sign in</button>
                <Link to="/registration"><button  className="btn btn-lg btn-primary btn-block buttonsInReg">or you create an account?</button></Link>

            </form>
              <Redirect
              to={{
                pathname: this.state.isLogged ? '/' : '/signin'            
              }}
            />
          </>
        );
    }
}