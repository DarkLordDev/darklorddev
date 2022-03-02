import Head from "next/head";
import React from "react";

const AboutPage = () => {
	return (
		<>
			<Head>
				<title>About | DarkLordDev</title>
			</Head>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 h-screen">
					<div className="max-h-96 md:h-screen">
						<img
							className="w-screen h-screen object-cover object-top"
							src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
						/>
					</div>
					<div className="flex bg-white p-10">
						<div className="mb-auto mt-auto max-w-lg">
							<h1 className="text-3xl uppercase">DarkLordDev</h1>
							<p className="font-semibold mb-5">Web Developer</p>
							<p>
								I am DarkLordDev. I welcome you to my portfolio website. I am a
								web developer. I hide my identity by this name. I don't know why
								I do this. I like to explore, code and read. This website was
								made so that people know more about me.
							</p>
							<button className="btn btn-danger">Contact Me</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
