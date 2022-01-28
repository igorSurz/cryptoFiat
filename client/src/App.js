//TODO
// - User rating
// - User wallet sidebar
//----------------------
//ONGOING
//deal room with chat

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './contexts/auth.context';
import MainDash from './layouts/MainDash/MainDash.js';
import ThemeContextWrapper from './components/ThemeWrapper/ThemeWrapper';
import BackgroundColorWrapper from './components/BackgroundColorWrapper/BackgroundColorWrapper';

function App() {
	const {
		token,
		login,
		logout,
		update,
		userId,
		username,
		email,
		additionalInfo,
		avatarIdx,
		btcWallet,
		city,
		country,
		fName,
		lName
	} = useAuth();

	const isAuthenticated = !!token;

	return (
		<AuthContext.Provider
			value={{
				token,
				login,
				logout,
				update,
				userId,
				isAuthenticated,
				username,
				email,
				additionalInfo,
				avatarIdx,
				btcWallet,
				city,
				country,
				fName,
				lName
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
