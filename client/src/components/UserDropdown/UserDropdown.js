import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth.context';

// reactstrap components
import {
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	NavLink
} from 'reactstrap';

const UserDropdown = () => {
	const auth = useContext(AuthContext);

	const logoutHandler = e => {
		e.preventDefault();
		auth.logout();
	};
	return (
		<UncontrolledDropdown nav>
			<DropdownToggle caret color="default" nav onClick={e => e.preventDefault()}>
				<div className="photo">
					<img
						alt="avatar"
						src={require(`../../assets/img/avatars/avatar${auth.avatarIdx}.png`)}
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
					<DropdownItem className="nav-item" onClick={logoutHandler}>
						Log out
					</DropdownItem>
				</NavLink>
			</DropdownMenu>
		</UncontrolledDropdown>
	);
};

export default UserDropdown;
