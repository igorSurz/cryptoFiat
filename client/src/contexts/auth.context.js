import { createContext } from 'react';

function neverUsed() {}

export const AuthContext = createContext({
	username: null,
	email: null,
	token: null,
	userId: null,
	login: neverUsed,
	logout: neverUsed,
	update: neverUsed,
	isAuthenticated: false,
	additionalInfo: null,
	avatarIdx: null,
	btcWallet: null,
	city: null,
	country: null,
	fName: null,
	lName: null
});
