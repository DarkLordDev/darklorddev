import Head from "next/head";
import React from "react";
import { useState } from "react";
import {
	cartContainer,
	mainContainer,
	cartItems,
	extraContainer,
	cartItemContainer,
	activeContainer,
	cartItemHeaderContainer,
} from "../styles/CartPage.module.css";

const CartPage = ({ cart, subTotal, clearCart }) => {
	const [subat, sets] = useState(0);

	return (
		<>
			<Head>
				<title>Your Cart | DarkLordDev</title>
			</Head>
			<section className={cartContainer}>
				{Object.keys(cart).length <= 0 ? (
					<p className="text-lg text-center my-5">
						Sorry you don't have any items in the cart please add some to view
						them here
					</p>
				) : (
					<div className={mainContainer}>
						<div className={cartItems}>
							{Object.keys(cart).map((cartItem, i) => (
								<div key={i} className={cartItemContainer}>
									<div className={cartItemHeaderContainer}>
										<strong>T Shirt</strong>
										<span>${cart[cartItem].price}</span>
									</div>
									<div className={activeContainer}>
										<h1>{cart[cartItem].name}</h1>
										<p>{cart[cartItem].variant}</p>
										<p>{cart[cartItem].size}</p>
										<div className="actions">
											<button>
												<i className="fa-duotone fa-plus" />
											</button>
											<a>{cart[cartItem].qty}</a>
											<button>
												<i className="fa-duotone fa-minus" />
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={extraContainer}>
							<button className="btn btn-danger">Pay ${subTotal}</button>
							<button className="btn btn-danger" onClick={clearCart}>
								Clear Cart
							</button>
						</div>
					</div>
				)}
			</section>
		</>
	);
};

export default CartPage;
