import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
	const [token, setToken] = useState(null);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [userId, setUserId] = useState(null);
	const [ready, setReady] = useState(false);

	const login = useCallback((jwtToken, id, name, email) => {
		setToken(jwtToken);
		setUserId(id);
		setName(name);
		setEmail(email);

		localStorage.setItem(
			storageName,
			JSON.stringify({
				userId: id,
				token: jwtToken,
				name: name,
				email: email
			})
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
		setName(null);
		setEmail(null);
		localStorage.removeItem(storageName);
	}, []);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName));

		if (data && data.token) {
			login(data.token, data.userId, data.name, data.email);
		}
		setReady(true);
	}, [login]);

	return { login, logout, token, userId, ready, name, email };
};
