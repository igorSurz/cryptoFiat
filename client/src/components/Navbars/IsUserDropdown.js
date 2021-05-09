import React from "react"
import classNames from "classnames"

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";

export const SignedIn = () => {
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
        <DropdownItem className="nav-item">Log out</DropdownItem>
      </NavLink>
    </DropdownMenu>
  </UncontrolledDropdown>
 )
}


export const NotLoggedIn = () => {
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
      <NavLink tag="li">
        <DropdownItem className="nav-item">email</DropdownItem>
      </NavLink>
      <NavLink tag="li">
        <DropdownItem className="nav-item">password</DropdownItem>
      </NavLink>
      <DropdownItem divider tag="li" />
      <NavLink tag="li">
        <DropdownItem className="nav-item">Log In</DropdownItem>
      </NavLink>
    </DropdownMenu>
  </UncontrolledDropdown>
  )
}