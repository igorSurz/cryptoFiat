import { Component } from "react";
import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';
import yuna from '../../images/yuna.jpg'
import office from '../../images/office.jpg'
import './sidebar.css'




class Sidebar extends Component {
  componentDidMount() {
    const elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
       
    });
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
    <a href="#name"><span className="white-text name">John Doe</span></a>
    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
  </div></li>
  <li><a href="#!"><i className="material-icons">sync_alt</i>Buy/Sell Bitcoin</a></li>
  <li><a href="#!"><i className="material-icons">cloud</i>Buy Bitcoin</a></li>

  <li><div className="divider"></div></li>
  <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
</ul>
<a href="#sidenav" data-target="slide-out" className="sidenav-trigger"><i className="ontop material-icons">menu</i></a>
</>


)
}
}
        

export default Sidebar;