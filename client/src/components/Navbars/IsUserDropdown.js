import React, {useContext, useState} from "react"
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../../contexts/auth.context'

// reactstrap components
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  NavLink,
  Form,
  FormGroup
  
 
 
} from "reactstrap";

export const SignedIn = () => {
  const auth = useContext(AuthContext)
  const logoutHandler = e => {
    e.preventDefault()
    auth.logout()
  
  }
 return (
    <UncontrolledDropdown nav>
    <DropdownToggle
      caret
      color="default"
      nav
      onClick={(e) => e.preventDefault()}
    >
      <div className="photo">
        <img
          alt="..."
          src={require("../../assets/img/anime3.png").default}
        />
      </div>
      <b className="caret d-none d-lg-block d-xl-block" />
      <p className="d-lg-none">Log out</p>
    </DropdownToggle>
    <DropdownMenu className="dropdown-navbar" right tag="ul">

      <NavLink tag="li">
        <DropdownItem className="nav-item">Profile</DropdownItem>
      </NavLink>
      <NavLink tag="li">
        <DropdownItem className="nav-item">Settings</DropdownItem>
      </NavLink>
      <DropdownItem divider tag="li" />
      <NavLink tag="li">
        <DropdownItem className="nav-item" onClick={logoutHandler}>Log out</DropdownItem>
      </NavLink>
    </DropdownMenu>
  </UncontrolledDropdown>
 )
}


export default function NotLoggedIn() {
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
      } catch (e) {}     
      
    };         
    


  return (
    <UncontrolledDropdown nav>
        <DropdownToggle
          caret
          color="default"
          nav
          onClick={(e) => e.preventDefault()}
        >
          <div className="photo">
            <img
              alt="..."
              src={require("../../assets/img/default-avatar.png").default}
            />
          </div>
          <b className="caret d-none d-lg-block d-xl-block" />
          <p className="d-lg-none">Log In</p>
        </DropdownToggle>
        <DropdownMenu className="dropdown-navbar" right tag="ul">
          <Form className="formControlCustom" onSubmit={signinHandler} >
            <FormGroup >         
              <Input className="inputCustom"  type="email" name="email" onChange={changeHandler} id="inputEmail" placeholder="Email address"  value={form.email} required   />
            </FormGroup> 
            <FormGroup >        
              <Input className="inputCustom" type="password" name="password" onChange={changeHandler} id="inputPassword"  placeholder="Password"  value={form.password} required />
            </FormGroup> 
               <DropdownItem divider tag="li" />
            <Button type="submit" className="buttonCustom btn-simple  btn btn-info btn-sm ">Log In</Button>
          </Form>
        </DropdownMenu>
    </UncontrolledDropdown>
  )
}