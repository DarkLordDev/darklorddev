import Head from "next/head";
import { useRouter } from "next/router";
import { Card } from "../utils/Components";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join("posts"));

	const posts = files.map((filename) => {
		const slug = filename.replace(".md", "");
		const markdownWithMeta = fs.readFileSync(
			path.join("posts", filename),
			"utf-8"
		);
		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts: posts,
		},
	};
};

const HomePage = ({ posts }) => {
	const router = useRouter();

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
							<h1 className="text-xl sm1:text-3xl text-red-500">
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
								blogs, softwares I use or I have ever created in my life, or you
								can just know more about me by pressing the buttons below.
							</p>
							<div id="jumbotron-desc-container-actions">
								<button
									onClick={() => router.push("/blog")}
									className="btn btn-danger"
								>
									Blog
								</button>
								<button
									onClick={() => router.push("/software")}
									className="btn btn-success"
								>
									Softwares
								</button>
								<button
									onClick={() => router.push("/about")}
									className="btn btn-primary"
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
							clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)",
						}}
					>
						<img src="/img/global_static/jumbotron_bg.jpg" alt="Sorry bro" />
					</div>
				</div>
				<h1 className="text-center text-lg font-medium mt-10 sm:text-xl lg:text-2xl">
					Try Some of the Blogs I made
				</h1>
				<div id="popular-softwares">
					{posts.map((post, i) => (
						<Card
							key={i}
							content={post.frontmatter.short_desc.substring(0, 60) + "..."}
							title={
								post.frontmatter.title.length >= 42
									? post.frontmatter.title.substring(0, 42) + "..."
									: post.frontmatter.title
							}
							imgSrc={post.frontmatter.source_img}
							btnStuff={{
								btnOnClick: () => router.push(`/blog/${post.slug}`),
								btnVal: "Read More",
								type: "danger",
							}}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default HomePage;
