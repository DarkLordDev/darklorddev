import Head from "next/head";
import React from "react";
import {
	cartContainer,
	mainContainer,
	cartItems,
	extraContainer,
	cartItemContainer,
	activeContainer,
	cartItemHeaderContainer,
} from "../styles/CartPage.module.css";

const CartPage = () => {
	return (
		<>
			<Head>
				<title>Your Cart | DarkLordDev</title>
			</Head>
			<section className={cartContainer}>
				<div className={mainContainer}>
					<div className={cartItems}>
						<div className={cartItemContainer}>
							<div className={cartItemHeaderContainer}>
								<strong>T Shirt</strong>
								<span>$29.99</span>
							</div>
							<div className={activeContainer}>
								<h1>DarkLord Superman Tee</h1>
								<p>Red</p>
								<div className="actions">
									<button>
										<i className="fa-duotone fa-plus" />
									</button>
									<a>1</a>
									<button>
										<i className="fa-duotone fa-minus" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className={extraContainer}>
						<button className="btn btn-danger">Pay $29.99</button>
						<button className="btn btn-danger">Clear Cart</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default CartPage;
