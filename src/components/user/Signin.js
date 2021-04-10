import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import {Link} from 'react-router-dom'





export default class Signin extends React.Component {
  
        state = {
          email:'',
          password:''
        };
       
   
   
    handleEmailChange = e => {
        this.setState({email: e.target.value})
        
    }
    handlePasswordChange = e =>{
        this.setState({password: e.target.value})
       
    }
    handleSubmit  = e => {
      e.preventDefault();
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      axios
      .post("/signin", user)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      };
     
    
   
        
    
    render() {
        return (
        <form className="form-signin" onSubmit={this.handleSubmit}>
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label htmlFor="inputEmail" className="sr-only"> Email address
                </label>
                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only"> Password</label>
                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit"> Sign in</button>

            </form>

            
        );
    }
}