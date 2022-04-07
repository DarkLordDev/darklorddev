import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

const SignInPage = () => {
	const router = useRouter();
	const [signInCreds, setSignInCreds] = useState({
		identifier: "",
		password: "",
	});

	const handleOnChange = (e) => {
		setSignInCreds({ ...signInCreds, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		console.log(JSON.stringify(signInCreds));
		const res = await fetch(
			"https://darklorddevbackendapi.herokuapp.com/auth/local",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(signInCreds),
			}
		);
		const json = await res.json();
		if (json !== null || json !== undefined) {
			localStorage.setItem("jwt", json.jwt);
			router.push("/");
		}
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
				<form onSubmit={handleOnSubmit}>
					<label htmlFor="identifier">
						Please Enter Your E-Mail down below
					</label>
					<input
						type="email"
						name="identifier"
						id="identifier"
						placeholder="Enter Your E-Mail here"
						required
						onChange={handleOnChange}
						value={signInCreds.identifier}
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
									identifier: "",
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

export default SignInPage;
