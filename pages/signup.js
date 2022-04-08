import Head from "next/head";
import React from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
	const [signUpCreds, setSignUpCreds] = React.useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleOnChange = (e) => {
		setSignUpCreds({ ...signUpCreds, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const { password, confirmPassword, username } = signUpCreds;
		if (password !== confirmPassword) {
			return toast.error("Sorry passwords did not match");
		}
		if (username.trim().length <= 5) {
			return toast.error("username must be more than 5 characters");
		}
		if (password >= 5) {
			return toast.error("username must be more than 5 characters");
		}
		const res = await fetch(
			"https://darklorddevbackendapi.herokuapp.com/auth/local/register",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(signUpCreds),
			}
		);
		setSignUpCreds({
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<>
			<Head>
				<title>SignUp | DarkLordDev</title>
			</Head>
			<div className="form-container">
				<div className="content-container">
					<h1>Please Sign Up and Create An Account</h1>
					<p>
						I strongly recommend you to join me by creating an account by
						filling the form. You can also unlock many features of this website
						by signing up
					</p>
				</div>
				<form onSubmit={handleOnSubmit}>
					<label htmlFor="username">Please Enter A Username down below</label>
					<input
						type="username"
						name="username"
						id="username"
						placeholder="Enter Your E-Mail here"
						onChange={handleOnChange}
						value={signUpCreds.username}
						required
					/>
					<label htmlFor="email">Please Enter Your E-Mail down below</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter Your E-Mail here"
						onChange={handleOnChange}
						value={signUpCreds.email}
						required
					/>
					<label htmlFor="password">
						Please choose your password and enter it down below
					</label>
					<input
						type="password"
						name="password"
						id="password"
						value={signUpCreds.password}
						onChange={handleOnChange}
						placeholder="Choose a password and enter it here"
						required
					/>
					<label
						htmlFor="confirmPassword"
						className="signup-confirmPassword-title text-xl"
					>
						Please rewrite your password down below
					</label>
					<input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						value={signUpCreds.confirmPassword}
						onChange={handleOnChange}
						placeholder="Rewrite the password"
						className="p-4 rounded-md outline-none border-2 border-b-white transition-all focus:border-b-red-500"
						required
					/>
					<div className="signup-actions-container space-x-5">
						<button className="btn btn-danger" type="submit">
							Submit
						</button>
						<button
							className="btn btn-secondary"
							onClick={() =>
								setSignUpCreds({
									email: "",
									password: "",
									confirmPassword: "",
									username: "",
								})
							}
							type="button"
						>
							Clear Fields
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignUpPage;
