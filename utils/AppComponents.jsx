import Head from "next/head";
import Link from "next/link";
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
			<header className="headbar">
				<nav style={{ height: !isRes ? "7rem" : "20rem" }} className="navbar">
					<div id="navbar-title-container">
						<Link href="/">
							<a id="navbar-title-container-title">DarkLordDev</a>
						</Link>
						<button
							onClick={() => setRes(!isRes)}
							id="navbar-title-container-btn"
							style={{ transform: `rotate(${!isRes ? "0" : "180"}deg)` }}
						>
							<i className="fa-duotone fa-circle-caret-down" />
						</button>
					</div>
					<ul
						id="navbar-ul"
						style={{
							opacity: !isRes ? "0" : "100",
						}}
					>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">Softwares</a>
						</li>
						<li>
							<a href="/">Blog</a>
						</li>
						<li>
							<a href="/">Contact</a>
						</li>
						<li>
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
					</ul>
					<div
						id="nav-actions"
						style={{
							opacity: !isRes ? "0" : "100",
						}}
					>
						<button>Sign In</button>
						<button>Sign Up</button>
					</div>
				</nav>
			</header>
		</>
	);
};

export const Footer = () => {
	return (
		<footer
			id="footer"
			className="flex bg-gray-50 shadow-lg drop-shadow-lg items-center p-6 mt-[10em]"
		>
			<p id="footer-title" className="text-2xl border-r pr-5 mr-5">
				DarkLordDev
			</p>
			<p className="text-gray-500">Copyright © 2022 DarkLordDev.com</p>
		</footer>
	);
};
