import Head from "next/head";
import React, { useState } from "react";

export const Navbar = () => {
	const [isRes, setRes] = useState(false);

	return (
		<>
			<Head>
				<link
					href="https://site-assets.fontawesome.com/releases/v6.0.0/css/all.css"
					rel="stylesheet"
				/>
			</Head>
			<header>
				<nav
					style={{ height: isRes ? "7rem" : "20rem" }}
					className={`flex flex-col bg-white sticky z-20 top-0 justify-between h-50 p-6 border-b w-full items-center lg:!h-auto lg:flex-row transition-all`}
				>
					<div
						id="nav-title-container"
						className="flex justify-between items-center w-full font-bold text-4xl lg:w-auto"
					>
						<a className="text-blue-500 lg:text-2xl" href="/">
							DarkLordDev
						</a>
						<button
							onClick={() => setRes(!isRes)}
							className="inline text-blue-500 p-2 rounded-full transition-all float-right lg:hidden"
						>
							<i className="fa-duotone fa-circle-caret-down" />
						</button>
					</div>
					<ul
						className={`flex flex-col space-y-2 opacity-0 items-center mt-5 mb-2 lg:!opacity-100 lg:flex-row lg:space-x-5 lg:space-y-0`}
						style={{
							opacity: isRes ? "0" : "100",
						}}
					>
						<li
							id="nav-items"
							className="text-black transition-all hover:text-gray-500"
						>
							<a href="/">Home</a>
						</li>
						<li
							id="nav-items"
							className="text-black transition-all hover:text-gray-500"
						>
							<a href="/">Softwares</a>
						</li>
						<li
							id="nav-items"
							className="text-black transition-all hover:text-gray-500"
						>
							<a href="/">Blog</a>
						</li>
						<li
							id="nav-items"
							className="text-black transition-all hover:text-gray-500"
						>
							<a href="/">Contact</a>
						</li>
						<li
							id="nav-items"
							className="text-black transition-all hover:text-gray-500"
						>
							<a href="/">About</a>
						</li>
					</ul>
					<div
						id="nav-actions"
						className="space-x-2 lg:!opacity-100"
						style={{
							opacity: isRes ? "0" : "100",
						}}
					>
						<button
							id="nav-signin-btn"
							className="bg-blue-500 py-2 px-4 rounded-md transition-all text-white font-bold hover:bg-blue-700 hover:text-gray-200 focus:ring focus:bg-blue-700 focus:text-gray-200"
						>
							Sign In
						</button>
						<button
							id="nav-signup-btn"
							className="bg-blue-500 py-2 px-4 rounded-md transition-all text-white font-bold hover:bg-blue-700 hover:text-gray-200 focus:ring focus:bg-blue-700 focus:text-gray-200"
						>
							Sign Up
						</button>
					</div>
				</nav>
			</header>
		</>
	);
};
