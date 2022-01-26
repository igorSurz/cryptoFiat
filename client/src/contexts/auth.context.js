import { createContext } from 'react';

function neverUsed() {}

export const AuthContext = createContext({
	name: null,
	email: null,
	token: null,
	userId: null,
	login: neverUsed,
	logout: neverUsed,
	isAuthenticated: false
});
