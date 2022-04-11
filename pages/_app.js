import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "../styles/global.css";
import "../styles/progress.css";
import "../styles/markdown.css";
import { Cart, Footer, Navbar } from "../utils/AppComponents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
	nProgress.configure({
		showSpinner: false,
	});
	Router.events.on("routeChangeStart", (url) => nProgress.start());
	Router.events.on("routeChangeComplete", (url) => nProgress.done());

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
			<ToastContainer />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
