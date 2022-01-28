import React, { useContext, useState } from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth.context';
import { BackgroundColorContext } from '../../contexts/BackgroundColorContext';
import FixedPlugin from '../../components/FixedPlugin/FixedPlugin.js';

// reactstrap components
import {
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	NavLink
} from 'reactstrap';

const UserDropdown = () => {
	const [pluginShow, setPluginShow] = useState(false);
	const auth = useContext(AuthContext);

	const logoutHandler = e => {
		e.preventDefault();
		auth.logout();
	};

	const onShowSettings = () => {
		setPluginShow(!pluginShow);
		document.body.style.overflow = !pluginShow ? 'hidden' : '';
	};

	return (
		<BackgroundColorContext.Consumer>
			{({ color, changeColor }) => (
				<>
					<UncontrolledDropdown nav>
						<DropdownToggle caret color="default" nav onClick={e => e.preventDefault()}>
							<div className="photo">
								<img
									alt="avatar"
									src={require(`../../assets/img/avatars/avatar${auth.avatarIdx}.png`)}
								/>
							</div>
							<b className="caret d-none d-lg-block d-xl-block" />
						</DropdownToggle>
						<DropdownMenu className="dropdown-navbar" right tag="ul">
							<NavLink tag="li">
								<NavLinkRouter to="/editprofile">
									<DropdownItem className="nav-item">Profile</DropdownItem>
								</NavLinkRouter>
							</NavLink>
							<NavLink tag="li">
								<DropdownItem onClick={onShowSettings} className="nav-item">
									Settings
								</DropdownItem>
							</NavLink>
							<DropdownItem divider tag="li" />
							<NavLink tag="li">
								<DropdownItem className="nav-item" onClick={logoutHandler}>
									Log out
								</DropdownItem>
							</NavLink>
						</DropdownMenu>
					</UncontrolledDropdown>

					<FixedPlugin
						showState={pluginShow}
						onShow={onShowSettings}
						bgColor={color}
						handleBgClick={changeColor}
					/>
				</>
			)}
		</BackgroundColorContext.Consumer>
	);
};

export default UserDropdown;
