import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import { useState } from "react";
import "../styles/globals.css";
import { Footer, Navbar } from "../utils/AppComponents";

function MyApp({ Component, pageProps }) {
	const [isLoading, setLoading] = useState(false);
	nProgress.configure({
		showSpinner: false,
	});
	Router.events.on("routeChangeStart", (url) => {
		nProgress.start();
		setLoading(true);
	});

	Router.events.on("routeChangeComplete", (url) => {
		nProgress.done();
		setLoading(false);
	});

	return (
		<>
			<Head>
				<meta
					name="description"
					content="This website is owned, created and developed by DarkLordDev. It is also a very professional website to know more about DarkLordDev"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
