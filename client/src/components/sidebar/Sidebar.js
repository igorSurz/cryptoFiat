import {useContext} from "react";
import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';
import office from '../../images/office.jpg'
import './sidebar.css'
import {Link, useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/auth.context'


export default function Sidebar() {
  
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {name, uemail} = useContext(AuthContext)
  
 
  const onClickMenu = () => {
    const elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250       
       })}

  const logoutHandler = e => {
    e.preventDefault()
    auth.logout()
    history.push('/')
  }
   
    
    return (
      <>
     
        <ul id="slide-out" className="sidenav">
          <><div className="user-view">
            <div className="background">
              <img src={office} alt="office"/>
            </div>
            {!auth.isAuthenticated && <p className="white-text back">Please signIn or create an account</p>} 
            {auth.isAuthenticated && <a href="#name"><span className="white-text name">{name}</span></a>} 
            {auth.isAuthenticated &&  <a href="#email"><span className="white-text email">{uemail}</span></a>} 
            {auth.isAuthenticated && <li><a className="waves-effect white-text" href="/" onClick={logoutHandler}>Logout</a></li>} 
              
          
          </div></>
          {!auth.isAuthenticated &&  <li><Link to='/signin'><i className="material-icons">login</i>Sign in</Link></li>} 
          {!auth.isAuthenticated &&  <li><Link to='/registration'><i className="material-icons">app_registration</i>Registration</Link></li>} 
         
         
          <li><Link to='/'><i className="material-icons">dashboard</i>Dashboard</Link></li>
          <li><a href="#!"><i className="material-icons">sync_alt</i>Buy/Sell Bitcoin</a></li>
          <li><a href="#!"><i className="material-icons">cloud</i>Buy Bitcoin</a></li>
          <li><div className="divider"></div></li>
         
        </ul>
        <a href="#sidenav" data-target="slide-out" className="sidenav-trigger" onClick={onClickMenu}><i className="ontop material-icons">menu</i></a>
      </>
      )
}
