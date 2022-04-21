import Head from "next/head";
import { useRouter } from "next/router";
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
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Shop | DarkLordDev</title>
			</Head>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						{Object.keys(products).map((product, i) => (
							<div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg">
								<a className="block relative h-48 rounded overflow-hidden">
									<img
										alt="ecommerce"
										className="object-cover object-center w-full h-full block"
										src={`https://dummyimage.com/720x400`}
									/>
								</a>
								<div className="mt-4">
									<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
										will be shipped Tomorrow
									</h3>
									<h2 className="text-gray-900 title-font text-lg font-medium">
										{products[product].title}
									</h2>
									<p className="mt-1">${products[product].price}</p>
									<p className="mt-1 space-x-2">
										{products[product].size.includes("XS") && <span>XS</span>}
										{products[product].size.includes("MD") && <span>MD</span>}
										{products[product].size.includes("LG") && <span>LG</span>}
										{products[product].size.includes("XL") && <span>XL</span>}
										{products[product].size.includes("2XL") && <span>2XL</span>}
									</p>
									<div className="mt-1 space-x-2">
										{products[product].color.includes("red") && (
											<span className="text-red-400 text-xl">
												<i className="fa-solid fa-circle" />
											</span>
										)}
										{products[product].color.includes("yellow") && (
											<span className="text-yellow-300 text-xl">
												<i className="fa-solid fa-circle" />
											</span>
										)}
										{products[product].color.includes("orange") && (
											<span className="text-orange-300 text-xl">
												<i className="fa-solid fa-circle" />
											</span>
										)}
										{products[product].color.includes("purple") && (
											<span className="text-purple-400 text-xl">
												<i className="fa-solid fa-circle" />
											</span>
										)}
										{products[product].color.includes("pink") && (
											<span className="text-pink-400 text-xl">
												<i className="fa-solid fa-circle" />
											</span>
										)}
										{products[product].color.includes("green") && (
											<span className="text-green-400 text-xl">
												<i className="fa-solid fa-circle" />
											</span>
										)}
									</div>
								</div>
								<div className="prodActions flex my-2 items-center">
									<button
										onClick={() =>
											router.push(`/shop/${products[product].slug}`)
										}
										className="btn btn-danger"
									>
										View Item
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default ShopPage;
