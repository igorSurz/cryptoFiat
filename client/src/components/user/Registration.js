import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './page.css'

export default class Registration extends React.Component{
    render() {
        return (
          <div className="container">
            <form className="form-signin">
              <h2 className="form-signin-heading">Please sign up</h2>
              <label htmlFor="inputName" className="sr-only">Name</label>
              <input type="text" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required />
              
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
              <label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
              <input type="password" onChange={this.handlePasswordConform} id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" required />
              
              <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
            </form>

            <>
            <Link to="/signin"><button  className="btn btn-lg btn-primary btn-block buttonsInReg">or you have an account?</button></Link>
            </>
          </div>
           
        )
      }
  }
