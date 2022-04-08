import Head from "next/head";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
	const [contactCreds, setContactCreds] = useState({ email: "", desc: "" });

	const handleOnChange = (e) => {
		setContactCreds({ ...contactCreds, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch(
			"https://darklorddevbackendapi.herokuapp.com/contacts",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(contactCreds),
			}
		);
		setContactCreds({ email: "", desc: "" });
		toast.success(
			"Contact has been send successfully. It will take about 36 hours to be administered. Thanks for yout feedback!"
		);
	};

	return (
		<>
			<Head>
				<title>Contact | DarkLordDev</title>
			</Head>
			<div className="form-container">
				<div className="content-container">
					<h1>Lets talk about everything!</h1>
					<p>
						Have doubt or suggestion to make? Feel free to ask anything. If you
						have any suggestions, please let me know. Your suggestions are
						highly appreciated. I appreciate your time and try hard to reply to
						every single message posted here! Keep dropping your priceless
						opinions.
					</p>
				</div>
				<form onSubmit={handleOnSubmit}>
					<label htmlFor="email">Please Enter Your E-Mail down below</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter Your E-Mail here"
						onChange={handleOnChange}
						value={contactCreds.email}
					/>
					<label htmlFor="desc">Please Enter Your Query down below</label>
					<input
						type="text"
						name="desc"
						value={contactCreds.desc}
						onChange={handleOnChange}
						placeholder="Enter the Message which you want to send here"
					/>
					<div className="contact-actions-container space-x-5">
						<button className="btn btn-danger" type="submit">
							Submit
						</button>
						<button
							className="btn btn-secondary"
							onClick={() =>
								setContactCreds({
									email: "",
									desc: "",
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

export default Contact;
