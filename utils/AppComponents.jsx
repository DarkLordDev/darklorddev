import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const Navbar = () => {
	const [isRes, setRes] = useState(false);
	const [jwt, setJwt] = useState("");
	const router = useRouter();
	useEffect(() => {
		setJwt(localStorage.getItem("jwt"));
	}, []);

	const handleSignOut = () => {
		localStorage.removeItem("jwt");
		router.push("/");
		location.reload();
	};

	return (
		<>
			<Head>
				<link
					href="https://site-assets.fontawesome.com/releases/v6.0.0/css/all.css"
					rel="stylesheet"
				/>
			</Head>
			<header className="headbar">
				<nav style={{ height: !isRes ? "5rem" : "23rem" }} className="navbar">
					<div id="navbar-title-container">
						<a href="/">
							<img
								src="/img/global_static/avatar.jpg"
								className="hidden lg:inline w-[3rem] rounded-full mx-2 cursor-pointer"
								alt=""
							/>
						</a>
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
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
						<li>
							<Link href="/shop">
								<a>Shop</a>
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
						<button id="cart" onClick={() => router.push("/cart")}>
							<i className="fa-duotone fa-cart-shopping"></i>
						</button>
						{!(jwt !== null) ? (
							<>
								<button onClick={() => router.push("/signup")}>Sign Up</button>
								<button onClick={() => router.push("/signin")}>Sign In</button>
							</>
						) : (
							<button onClick={handleSignOut}>Sign Out</button>
						)}
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
			<footer>
				<div id="footer-left-container">
					<span id="first">
						<img
							src="/img/global_static/avatar.jpg"
							alt="Sorry couldn't see the image due to error"
						/>
						<p>DarkLordDev</p>
					</span>
					<p id="footer-additionaltext">Copyright ?? 2022 DarkLordDev.com</p>
				</div>
				<span id="footer-right-container">
					<a href="https://github.com/DarkLordDev" target="_blank">
						<i className="fa-brands fa-github" />
					</a>
				</span>
			</footer>
		</>
	);
};
