import { Component } from "react";
import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';
import yuna from '../../images/yuna.jpg'
import office from '../../images/office.jpg'
import './sidebar.css'
import {Link} from 'react-router-dom'





export default class Sidebar extends Component {
  state = {
    userName: '',
    userMail:  ' '
  }
 
  componentDidMount() {
    const elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250       
    });
    console.log(this.state)
    console.log(typeof(localStorage.userName))
   
  }

 componentDidUpdate() {
    console.log('updated')
  }
componentWillUnmount() 
{
  console.log('unmounted')
}

 onClickMenu = () => {
  if (localStorage.length > 0) {   
    this.setState({
      userName:  localStorage.userName,
      userMail:   localStorage.email
    })
 } else {
  this.setState({
    userName: 'Please logg in',
    userMail:  ' '
  })

 } 
 
}

  render() {
    return (
      <>
        <ul id="slide-out" className="sidenav">
          <li><div className="user-view">
            <div className="background">
              <img src={office} alt="office"/>
            </div>
            <a href="#user"><img className="circle" src={yuna} alt="yuna"></img></a>
            <a href="#name"><span className="white-text name">{this.state.userName}</span></a>
            <a href="#email"><span className="white-text email">{this.state.userMail}</span></a>
          </div></li>
          <li><Link to='/signin'><i className="material-icons">login</i>Sign in</Link></li>
          <li><Link to='/registration'><i className="material-icons">app_registration</i>Registration</Link></li>

          <li><Link to='/'><i className="material-icons">sync_alt</i>Main Page</Link></li>

          <li><a href="#!"><i className="material-icons">sync_alt</i>Buy/Sell Bitcoin</a></li>
          <li><a href="#!"><i className="material-icons">cloud</i>Buy Bitcoin</a></li>
          <li><Link to='/chart'><i className="material-icons">show_chart</i>Chart</Link></li>

          <li><div className="divider"></div></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <a href="#sidenav" data-target="slide-out" className="sidenav-trigger" onClick={this.onClickMenu}><i className="ontop material-icons">menu</i></a>
      </>
      


)
}
}
        

