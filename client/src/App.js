import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './contexts/auth.context';
import MainDash from './layouts/MainDash/MainDash.js';
import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';

function App() {
	const { token, login, logout, userId, ready, name, uemail } = useAuth();
	const isAuthenticated = !!token;
	if (!ready) {
		//if something not ready I can do some magic here
	}
	return (
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
					<BrowserRouter>
						<Switch>
							<Route path="/" render={props => <MainDash {...props} />} />
						</Switch>
					</BrowserRouter>
				</BackgroundColorWrapper>
			</ThemeContextWrapper>
			,
		</AuthContext.Provider>
	);
}

export default App;
