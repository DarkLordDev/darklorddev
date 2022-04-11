import Head from "next/head";
import React from "react";

export const getStaticProps = async () => {
	const res = await fetch(
		"https://darklorddevbackendapi.herokuapp.com/productinfos",
		{
			method: "GET",
		}
	);
	const json = await res.json();
	console.log(json);
	return {
		props: {
			products: json,
		},
	};
};

const ShopPage = ({ products }) => {
	const [prod, setProd] = React.useState(products);
	console.log(prod);
	return (
		<>
			<Head>
				<title>DarkLordDev | Shop</title>
			</Head>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						{prod.map((product) => (
							<div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg">
								<a className="block relative h-48 rounded overflow-hidden">
									<img
										alt="ecommerce"
										className="object-cover object-center w-full h-full block"
										src={`/img/accessories/${product.imgsrc}`}
									/>
								</a>
								<div className="mt-4">
									<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
										{product.category}
									</h3>
									<h2 className="text-gray-900 title-font text-lg font-medium">
										{product.title}
									</h2>
									<p className="mt-1">{product.price}</p>
								</div>
								<div className="prodActions pt-2 mt-5 space-x-2">
									<button className="btn btn-danger">Buy Now</button>
									<button className="btn btn-danger">Add To Cart</button>
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
