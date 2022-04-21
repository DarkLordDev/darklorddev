import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";
import "../styles/global.css";
import "../styles/progress.css";
import "../styles/markdown.css";
import { Footer, Navbar } from "../utils/AppComponents";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
	nProgress.configure({
		showSpinner: false,
	});
	Router.events.on("routeChangeStart", (url) => nProgress.start());
	Router.events.on("routeChangeComplete", (url) => nProgress.done());
	const [cart, setCart] = useState({});
	const [subTotal, setSubTotal] = useState(0);

	useEffect(() => {
		try {
			if (localStorage.getItem("cart")) {
				setCart(JSON.parse(localStorage.getItem("cart")));
			} else {
				setCart({});
			}
		} catch (error) {
			console.error(error);
			localStorage.removeItem("cart");
			toast.error("Sorry, Error Ocurred");
		}
		try {
			if (localStorage.getItem("subt")) {
				setSubTotal(JSON.parse(localStorage.getItem("subt")));
			} else {
				setSubTotal(0);
			}
		} catch (error) {
			console.error(error);
			localStorage.removeItem("subt");
			toast.error("Sorry, Error Ocurred");
		}
	}, []);

	const saveCart = (myCart) => {
		localStorage.setItem("cart", JSON.stringify(myCart));
		let subt = 0;
		let keys = Object.keys(cart);
		for (let i = 0; i < keys.length; i++) {
			const e = keys[i];
			subt += cart[e].price * cart[e].qty;
		}
		setSubTotal(subt);
		localStorage.setItem("subt", subt);
	};

	const addCart = (itemCode, qty, price, name, size, variant) => {
		let myCart = cart;
		if (itemCode in cart) {
			myCart[itemCode].qty = cart[itemCode].qty + 1;
		} else if (!(itemCode in cart)) {
			myCart[itemCode] = { qty: 1, price, name, size, variant };
		} else {
			toast.error("Sorry, Error Ocurred");
		}
		setCart(myCart);
		saveCart(myCart);
		console.log(cart);
		// window.location.href = "http://localhost:3000/cart/";
	};

	const removeCart = (itemCode, qty, price, name, size, variant) => {
		let myCart = cart;
		if (itemCode in cart) {
			myCart[itemCode].qty = cart[itemCode].qty - qty;
		} else if (myCart[itemCode]["qty"] <= 0) {
			delete myCart[itemCode];
		} else {
			toast.error("Sorry, Error Ocurred");
		}
		setCart(myCart);
		saveCart(myCart);
	};

	const clearCart = () => {
		setCart({});
		saveCart({});
		toast.info("All the objects from your cart has been removed");
	};

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
			<Component
				saveCart={saveCart}
				clearCart={clearCart}
				addCart={addCart}
				cart={cart}
				removeCart={removeCart}
				subTotal={subTotal}
				{...pageProps}
			/>
			<Footer />
		</>
	);
};

export default MyApp;
