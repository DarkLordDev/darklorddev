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
				<nav style={{ height: !isRes ? "5rem" : "20rem" }} className="navbar">
					<div id="navbar-title-container">
						<Link href="/">
							<img
								src="/img/global_static/avatar.jpg"
								className="hidden lg:inline w-[3rem] rounded-full mx-2 cursor-pointer"
								alt=""
							/>
						</Link>
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
					<ul id="navbar-ul">
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/software">
								<a>Softwares</a>
							</Link>
						</li>
						<li>
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a href="/">Contact</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
					</ul>
					<div id="nav-actions">
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
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://site-assets.fontawesome.com/releases/v6.0.0/css/all.css"
				/>
			</Head>
			<footer
				id="footer"
				className="flex items-center p-6 mt-5 mb-[10em] justify-between"
			>
				<div className="flex items-center">
					<p id="footer-title" className="text-2xl border-r pr-5 mr-5">
						DarkLordDev
					</p>
					<p className="text-gray-500">Copyright © 2022 DarkLordDev.com</p>
				</div>
				<span className="float-right text-2xl">
					<a href="https://github.com/DarkLordDev" target="_blank">
						<i className="fa-brands fa-github" />
					</a>
				</span>
			</footer>
		</>
	);
};
