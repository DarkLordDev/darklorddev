import Head from "next/head";
import { useRouter } from "next/router";
import { Card } from "../utils/Components";

const Home = () => {
	const router = useRouter();

	const demoCheck = (demoparam) => {
		console.log(demoparam);
	};

	return (
		<>
			<Head>
				<title>Home | DarkLordDev</title>
			</Head>
			<div className="container mx-auto">
				<div id="jumbotron" className="flex justify-center xl:justify-between">
					<div
						id="jumbotron-content-container"
						className="flex flex-col justify-center text-center sm:w-[50vw] xl:w-[28vw]"
					>
						<div id="jumbotron-header-container">
							<h1 className="text-xl sm1:text-3xl text-blue-500">
								Welcome To DarkLordDev
							</h1>
						</div>
						<div
							id="jumbotron-desc-container"
							className="text-base text-gray-500"
						>
							<p>
								Hi, I am DarkLordDev. I know that you might be wondering why
								name is so ridiculous? Well, I use because its very cool. This
								website was made so that people know more about me. Check my
								blogs, softwares i use, or you can just know more about me by
								pressing the buttons below.
							</p>
							<div id="jumbotron-desc-container-actions">
								<button className="btn btn-primary">Blog</button>
								<button className="btn btn-success">Softwares</button>
								<button
									onClick={() => router.push("/about")}
									className="btn btn-secondary"
								>
									About
								</button>
							</div>
						</div>
					</div>
					<div
						id="jumbotron-img-container"
						className="hidden xl:block lg:w-1/2 lg:h[20rem]"
						style={{
							clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%);",
						}}
					>
						<img src="/img/global_static/jumbotron_bg.jpg" alt="Sorry bro" />
					</div>
				</div>
				<h1 className="text-center text-lg font-medium mt-10 sm:text-xl lg:text-2xl">
					Try Some of the Softwares I use
				</h1>
				<div id="popular-softwares">
					<Card
						title="Demo Title"
						imgSrc="https://dummyimage.com/600x400/000/fff"
						content="This a demo text I guessThis a demo text I guessThis a demo text I guessThis a demo text I guessThis a"
						btnStuff={{
							btnVal: "Read More",
							btnOnClick: () => demoCheck(1),
						}}
					/>
					<Card
						title="Demo Title"
						imgSrc="https://dummyimage.com/600x400/000/fff"
						content="This a demo text I guessThis a demo text I guessThis a demo text I guessThis a demo text I guessThis a"
						btnStuff={{
							btnVal: "Read More",
							btnOnClick: () => demoCheck(1),
						}}
					/>
					<Card
						title="Demo Title"
						imgSrc="https://dummyimage.com/600x400/000/fff"
						content="This a demo text I guessThis a demo text I guessThis a demo text I guessThis a demo text I guessThis a"
						btnStuff={{
							btnVal: "Read More",
							btnOnClick: () => demoCheck(1),
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
