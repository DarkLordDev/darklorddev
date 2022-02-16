import Head from "next/head";
import React, { useState } from "react";

const Contact = () => {
	const [contactCreds, setContactCreds] = useState({ email: "", desc: "" });

	const handleOnChange = (e) => {
		setContactCreds({ ...contactCreds, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Head>
				<title>Contact | DarkLordDev</title>
			</Head>
			<div className="contact-container container mx-auto my-[5rem] h-[50rem] justify-center flex flex-row shadow-lg">
				<div className="content-container justify-center flex-col drop-shadow-md items-center w-[50%] flex">
					<h1 className="contact-title text-3xl my-5 font-bold">
						Lets talk about everything!
					</h1>
					<p className="contact-description text-gray-500 w-[55%]">
						Have doubt or suggestion to make? Feel free to ask anything. If you
						have any suggestions, please let me know. Your suggestions are
						highly appreciated. I appreciate your time and try hard to reply to
						every single message posted here! Keep dropping your priceless
						opinions.
					</p>
				</div>
				<form className="input-container justify-center w-[50%] flex flex-col p-5 drop-shadow-md space-y-5">
					<label htmlFor="email" className="contact-email-title text-xl">
						Please Enter Your E-Mail down below
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter Your E-Mail here"
						className="p-4 rounded-md outline-none border-2 border-b-white transition-all focus:border-b-red-500"
						onChange={handleOnChange}
						value={contactCreds.email}
					/>
					<label htmlFor="desc" className="contact-desc-title text-xl">
						Please Enter Your Query down below
					</label>
					<input
						type="text"
						name="desc"
						value={contactCreds.desc}
						onChange={handleOnChange}
						placeholder="Enter the Message which you want to send here"
						className="p-4 rounded-md outline-none border-2 border-b-white transition-all focus:border-b-red-500"
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
			;
		</>
	);
};

export default Contact;
