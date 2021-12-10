import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
import { Form, Input } from 'reactstrap';
import './AuthModal.css';

const AuthModal = () => {
	const history = useHistory();
	const auth = useContext(AuthContext);
	const [activePanel, setactivePanel] = useState(false);
	const [form, setForm] = useState({
		email: '',
		password: ''
	});

	const changeHandler = event => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const signInHandler = e => {
		e.preventDefault();
		try {
			axios.post(`/api/signin`, { ...form }).then(res => {
				auth.login(res.data.token, res.data.message._id, res.data.message.name, res.data.message.email);
				history.push('/');
			});
		} catch (e) {}
	};
	const signUpHandler = e => {
		console.log(form);
		e.preventDefault();
		try {
			axios.post(`/api/signup`, { ...form }).then(async res => {
				console.log(res.data.success);
				let result = await res.data.success;
				if (result) {
					setactivePanel(prevState => !prevState);
				}

				// history.push('/');
			});
		} catch (e) {}
	};

	const onSignInHandler = event => {
		event.preventDefault();
		setactivePanel(prevState => !prevState);
	};

	const onSignUpHandler = event => {
		event.preventDefault();

		setactivePanel(prevState => !prevState);
	};

	const classValue = activePanel ? 'right-panel-active' : '';
	return (
		// <div className="content">
		<div className={`container ${classValue}`}>
			{/* <!-- Sign Up --> */}
			<div className="container__form container--signup">
				<Form className="form" id="form1" onSubmit={signUpHandler}>
					<h2 className="form__title">Sign Up</h2>

					<Input type="text" placeholder="User" name="name" onChange={changeHandler} className="input" />
					<Input type="email" placeholder="Email" name="email" onChange={changeHandler} className="input" />
					<Input
						type="password"
						placeholder="Password"
						name="password"
						onChange={changeHandler}
						className="input"
					/>
					<Input
						type="password"
						placeholder="Conformation"
						name="password_confirmation"
						onChange={changeHandler}
						className="input"
					/>

					<button type="submit" className="btn">
						Sign Up
					</button>
				</Form>
			</div>

			{/* <!-- Sign In --> */}
			<div className="container__form container--signin">
				<Form className="form" id="form2" onSubmit={signInHandler}>
					<h2 className="form__title">Sign In</h2>
					<Input
						type="email"
						name="email"
						placeholder="Email"
						className="input"
						onChange={changeHandler}
						value={form.email}
						required
					/>
					<Input
						type="password"
						name="password"
						placeholder="Password"
						className="input"
						onChange={changeHandler}
						id="inputPassword"
						value={form.password}
						required
					/>
					<a href="/" className="link">
						Forgot your password?
					</a>
					<button type="submit" className="btn">
						Sign In
					</button>
				</Form>
			</div>

			{/* <!-- Overlay --> */}
			<div className="container__overlay">
				<div className="overlay">
					<div className="overlay__panel overlay--left">
						<button onClick={onSignInHandler} className="btn" id="signIn">
							Sign In
						</button>
					</div>
					<div className="overlay__panel overlay--right">
						<button onClick={onSignUpHandler} className="btn" id="signUp">
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
};

export default AuthModal;
