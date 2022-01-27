import { useState, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
	const [user, setUser] = useState({
		token: null,
		username: null,
		email: null,
		userId: null,
		additionalInfo: null,
		avatarIdx: null,
		btcWallet: null,
		city: null,
		country: null,
		fName: null,
		lName: null
	});

	const login = (jwtToken, fetchedUser) => {
		setUser({ token: jwtToken, userId: fetchedUser._id, ...fetchedUser });

		localStorage.setItem(
			storageName,
			JSON.stringify({ token: jwtToken, userId: fetchedUser._id, ...fetchedUser })
		);
	};

	const logout = () => {
		setUser({});
		localStorage.removeItem(storageName);
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName));
		if (data && data.token) {
			login(data.token, data);
		}
	}, []);

	return { login, logout, ...user };
};
