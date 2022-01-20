import React from 'react';
import { BrowserRouter, Switch, Route, useLocation, Redirect } from 'react-router-dom';

import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './contexts/auth.context';
import { BackgroundColorContext } from './contexts/BackgroundColorContext';

import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';
import routes from './routes';

// core components
import HeadNavbar from './components/Navbars/HeadNavbar.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import FixedPlugin from './components/FixedPlugin/FixedPlugin.js';
import Footer from './components/Footer/Footer';

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
let ps = '';

function App() {
	const { token, login, logout, userId, ready, name, uemail } = useAuth();
	const [sidebarOpened, setsidebarOpened] = React.useState(
		document.documentElement.className.indexOf('nav-open') !== -1
	);
	const mainPanelRef = React.useRef(null);
	const isAuthenticated = !!token;
	const location = useLocation();

	React.useEffect(() => {
		if (navigator.platform.indexOf('Win') > -1) {
			document.documentElement.className += ' perfect-scrollbar-on';
			document.documentElement.classList.remove('perfect-scrollbar-off');
			ps = new PerfectScrollbar(mainPanelRef.current, {
				suppressScrollX: true
			});
			let tables = document.querySelectorAll('.table-responsive');
			for (let i = 0; i < tables.length; i++) {
				ps = new PerfectScrollbar(tables[i]);
			}
		}
		// Specify how to clean up after this effect:
		return function cleanup() {
			if (navigator.platform.indexOf('Win') > -1) {
				ps.destroy();
				document.documentElement.classList.add('perfect-scrollbar-off');
				document.documentElement.classList.remove('perfect-scrollbar-on');
			}
		};
	});
	React.useEffect(() => {
		if (navigator.platform.indexOf('Win') > -1) {
			let tables = document.querySelectorAll('.table-responsive');
			for (let i = 0; i < tables.length; i++) {
				ps = new PerfectScrollbar(tables[i]);
			}
		}
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		if (mainPanelRef.current) {
			mainPanelRef.current.scrollTop = 0;
		}
	}, [location]);

	const getBrandText = path => {
		for (let i = 0; i < routes.length; i++) {
			if (location.pathname.indexOf(routes[i].path) !== -1) {
				return routes[i].name;
			}
		}
		return 'Brand';
	};

	if (!ready) {
		//if something not ready I can do some magic here
	}

	// this function opens and closes the sidebar on small devices
	const toggleSidebar = () => {
		document.documentElement.classList.toggle('nav-open');
		setsidebarOpened(!sidebarOpened);
	};

	return (
		<BrowserRouter>
			<AuthContext.Provider
				value={{
					token,
					login,
					logout,
					userId,
					isAuthenticated,
					name,
					uemail
				}}>
				<ThemeContextWrapper>
					<BackgroundColorWrapper>
						<BackgroundColorContext.Consumer>
							{({ color, changeColor }) => (
								<React.Fragment>
									<div className="wrapper">
										<Sidebar routes={routes} toggleSidebar={toggleSidebar} />
										<div className="main-panel" ref={mainPanelRef} data={color}>
											<HeadNavbar
												brandText={getBrandText(location.pathname)}
												toggleSidebar={toggleSidebar}
												sidebarOpened={sidebarOpened}
											/>
											<Switch>
												{routes.map((prop, key) => {
													return (
														<Route path={prop.path} component={prop.component} key={key} />
													);
												})}

												<Redirect from="/" to="/dashboard" />
											</Switch>

											<Footer />
										</div>
									</div>
									<FixedPlugin bgColor={color} handleBgClick={changeColor} />
								</React.Fragment>
							)}
						</BackgroundColorContext.Consumer>
					</BackgroundColorWrapper>
				</ThemeContextWrapper>
				,
			</AuthContext.Provider>
		</BrowserRouter>
	);
}

export default App;
