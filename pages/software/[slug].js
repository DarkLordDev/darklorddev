import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Slug = () => {
	const router = useRouter();
	const { slug } = router.query;
	return (
		<>
			<Head>
				<title>Softwares | DarkLordDev - {slug}</title>
			</Head>
			<div className="container mx-auto text-center">{slug}</div>
		</>
	);
};

export default Slug;
