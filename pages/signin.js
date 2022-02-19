import Head from "next/head";
import { useState } from "react";

const signin = () => {
	const [signInCreds, setSignInCreds] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleOnChange = (e) => {
		setSignInCreds({ ...signInCreds, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Head>
				<title>SignIn | DarkLordDev</title>
			</Head>
			<div className="form-container">
				<div className="content-container">
					<h1>Please Sign In with your created account</h1>
					<p>
						Please login using the account you created by filling the form. You
						can also unlock many features of this website by signing in
					</p>
				</div>
				<form>
					<label htmlFor="username">Please Your Username down below</label>
					<input
						type="username"
						name="username"
						id="username"
						placeholder="Enter Your E-Mail here"
						onChange={handleOnChange}
						value={signInCreds.username}
						required
					/>
					<label htmlFor="email">Please Enter Your E-Mail down below</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter Your E-Mail here"
						required
						onChange={handleOnChange}
						value={signInCreds.email}
					/>
					<label htmlFor="password" className="signin-password-title text-xl">
						Please Enter your password down below
					</label>
					<input
						type="password"
						name="password"
						value={signInCreds.password}
						onChange={handleOnChange}
						placeholder="Enter the Message which you want to send here"
						required
					/>
					<div className="signin-actions-container space-x-5">
						<button className="btn btn-danger" type="submit">
							Submit
						</button>
						<button
							className="btn btn-secondary"
							onClick={() =>
								setSignInCreds({
									username: "",
									email: "",
									password: "",
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

export default signin;
