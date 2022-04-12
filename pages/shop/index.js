import Head from "next/head";
import React from "react";

export const getStaticProps = async () => {
	const res = await fetch(
		`https://darklorddevbackendapi.herokuapp.com/products`,
		{
			method: "GET",
		}
	);
	const json = await res.json();
	let products = {};
	for (let product of json) {
		if (product.title in products) {
			if (
				!products[product.title].color.includes(product.color) &&
				product.availableqty > 0
			) {
				products[product.title].color.push(product.color);
			}
			if (
				!products[product.title].size.includes(product.size) &&
				product.availableqty > 0
			) {
				products[product.title].size.push(product.size);
			}
		} else {
			products[product.title] = JSON.parse(JSON.stringify(product));
			if (product.availableqty > 0) {
				products[product.title].color = [product.color];
				products[product.title].size = [product.size];
			}
		}
	}

	return {
		props: {
			products,
		},
	};
};

const ShopPage = ({ products }) => {
	return (
		<>
			<Head>
				<title>Shop | DarkLordDev</title>
			</Head>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						<div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg">
							<a className="block relative h-48 rounded overflow-hidden">
								<img
									alt="ecommerce"
									className="object-cover object-center w-full h-full block"
									src={`https://dummyimage.com/720x400`}
								/>
							</a>
							<div className="mt-4">
								<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
									category
								</h3>
								<h2 className="text-gray-900 title-font text-lg font-medium">
									title
								</h2>
								<p className="mt-1">price</p>
							</div>
							<div className="prodActions flex pt-2 mt-5 space-x-2">
								<button className="btn btn-danger">View Item</button>
								<div className="rightProdActions flex w-[50%] space-x-2 justify-end items-center">
									<button className="text-yellow-300 text-xl">
										<i className="fa-solid fa-circle" />
									</button>
									<button className="text-orange-300 text-xl">
										<i className="fa-solid fa-circle" />
									</button>
									<button className="text-red-400 text-xl">
										<i className="fa-solid fa-circle" />
									</button>
									<button className="text-pink-400 text-xl">
										<i className="fa-solid fa-circle" />
									</button>
									<button className="text-purple-400 text-xl">
										<i className="fa-solid fa-circle" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ShopPage;
