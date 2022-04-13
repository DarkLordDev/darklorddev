import Head from "next/head";
import React from "react";
import { toast } from "react-toastify";

export const getStaticPaths = async () => {
	const res = await fetch(
		`https://darklorddevbackendapi.herokuapp.com/products`,
		{
			method: "GET",
		}
	);
	const json = await res.json();
	const paths = json.map((product) => ({
		params: {
			slug: product.slug,
		},
	}));

	console.log(paths);

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const productRes = await fetch(
		`https://darklorddevbackendapi.herokuapp.com/products?slug=${slug}`,
		{
			method: "GET",
		}
	);
	const product = await productRes.json();
	const variantsRes = await fetch(
		`https://darklorddevbackendapi.herokuapp.com/products?title=${product[0].title}`,
		{
			method: "GET",
		}
	);
	const variants = await variantsRes.json();
	// console.log(variants[0]);
	let colorSizeSlug = {};
	for (let item of variants) {
		if (Object.keys(colorSizeSlug).includes(item.color)) {
			colorSizeSlug[item.color][item.size] = { slug: item.slug };
		} else {
			colorSizeSlug[item.color] = {};
			colorSizeSlug[item.color][item.size] = { slug: item.slug };
		}
	}

	return {
		props: {
			variants: JSON.parse(JSON.stringify(colorSizeSlug)),
			product: JSON.parse(JSON.stringify(product[0])),
		},
	};
};

const ShopItemPage = ({ product, variants }) => {
	const [size, setSize] = React.useState(product.size);
	const [color, setColor] = React.useState(product.color);
	const handleChangeVariant = (newColor, newSize) => {
		console.log();
		if (Object.keys(variants[newColor]).includes(newSize)) {
			let url = `http://localhost:3000/shop/${variants[newColor][newSize]["slug"]}`;
			location.href = url;
		} else if (!Object.keys(variants[newColor]).includes(newSize)) {
			const newSizeIndex = Object.keys(variants[newColor])[0];
			let url = `http://localhost:3000/shop/${variants[newColor][newSizeIndex]["slug"]}`;
			location.href = url;
		} else {
			toast.error("That product variant is currently unavailable");
		}
	};

	return (
		<>
			<Head>
				<title>Shop | DarkLordDev</title>
			</Head>
			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<img
							alt="ecommerce"
							className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
							src="https://dummyimage.com/400x400"
						/>
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">
								DarkLordDev Shop
							</h2>
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
								{product.title}
							</h1>
							<div className="flex mb-4">
								<span className="flex items-center"></span>
							</div>
							<p className="leading-relaxed">
								Fam locavore kickstarter distillery. Mixtape chillwave tumeric
								sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
								juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
								seitan poutine tumeric. Gastropub blue bottle austin listicle
								pour-over, neutra jean shorts keytar banjo tattooed umami
								cardigan.
							</p>
							<div id="shopItemDetails" className="my-2">
								<div class="flex border-t border-gray-200 py-2">
									<span class="text-gray-500">Color</span>
									<span class="ml-auto text-gray-900">{color}</span>
								</div>
								<div class="flex border-t border-gray-200 py-2">
									<span class="text-gray-500">Size</span>
									<span class="ml-auto text-gray-900">{size}</span>
								</div>
								<div class="flex border-t border-b mb-6 border-gray-200 py-2">
									<span class="text-gray-500">Quantity</span>
									<span class="ml-auto text-gray-900">
										{product.availableqty} units
									</span>
								</div>
							</div>
							<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
								<div className="flex space-x-3">
									<span className="mr-3">Color</span>
									{Object.keys(variants).includes("red") ? (
										<button
											onClick={() => handleChangeVariant("red", size)}
											className="text-red-500 text-xl"
										>
											<i className="fa-solid fa-circle" />
										</button>
									) : null}
									{Object.keys(variants).includes("yellow") ? (
										<button
											onClick={() => handleChangeVariant("yellow", size)}
											className="text-yellow-300 text-xl"
										>
											<i className="fa-solid fa-circle" />
										</button>
									) : null}
									{Object.keys(variants).includes("orange") ? (
										<button
											onClick={() => handleChangeVariant("orange", size)}
											className="text-orange-300 text-xl"
										>
											<i className="fa-solid fa-circle" />
										</button>
									) : null}
									{Object.keys(variants).includes("purple") ? (
										<button
											onClick={() => handleChangeVariant("purple", size)}
											className="text-purple-400 text-xl"
										>
											<i className="fa-solid fa-circle" />
										</button>
									) : null}
									{Object.keys(variants).includes("pink") ? (
										<button
											onClick={() => handleChangeVariant("pink", size)}
											className="text-pink-400 text-xl"
										>
											<i className="fa-solid fa-circle" />
										</button>
									) : null}
									{Object.keys(variants).includes("green") ? (
										<button
											onClick={() => handleChangeVariant("green", size)}
											className="text-green-400 text-xl"
										>
											<i className="fa-solid fa-circle" />
										</button>
									) : null}
								</div>
								<div className="flex ml-6 items-center">
									<span className="mr-3">Size</span>
									<div className="relative">
										<select
											value={size}
											onChange={(e) =>
												handleChangeVariant(color, e.target.value)
											}
											className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10"
										>
											{Object.keys(variants[color]).includes("XS") && (
												<option>XS</option>
											)}
											{Object.keys(variants[color]).includes("SM") && (
												<option>SM</option>
											)}
											{Object.keys(variants[color]).includes("MD") && (
												<option>MD</option>
											)}
											{Object.keys(variants[color]).includes("LG") && (
												<option>LG</option>
											)}
											{Object.keys(variants[color]).includes("XL") && (
												<option>XL</option>
											)}
											{Object.keys(variants[color]).includes("2XL") && (
												<option>2XL</option>
											)}
										</select>
										<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4"
												viewBox="0 0 24 24"
											>
												<path d="M6 9l6 6 6-6"></path>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="flex">
								<span className="title-font font-medium text-2xl text-gray-900">
									${product.price}
								</span>
								<button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
									Add To Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ShopItemPage;
