import Head from "next/head";
import { useRouter } from "next/router";
import { Card } from "../utils/Components";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
	jumbotron,
	jumbotronContentContainer,
	jumbotronHeaderContainer,
	jumbotronDescContainer,
	jumbotronDescContainerActions,
	jumbotronImgContainer,
	newStartingTitle,
	popularAchievements,
} from "../styles/HomePage.module.css";

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
				<div className={jumbotron}>
					<div className={jumbotronContentContainer}>
						<div id={jumbotronHeaderContainer}>
							<h1>Welcome To DarkLordDev</h1>
						</div>
						<div id={jumbotronDescContainer}>
							<p>
								Hi, I am DarkLordDev. I know that you might be wondering why
								name is so ridiculous? Well, I use because its very cool. This
								website was made so that people know more about me. Check my
								blogs, softwares I use or I have ever created in my life, or you
								can just know more about me by pressing the buttons below.
							</p>
							<div id={jumbotronDescContainerActions}>
								<button
									onClick={() => router.push("/blog")}
									className="btn btn-danger"
								>
									Blog
								</button>
								{/* <button
									onClick={() => router.push("/downloadables")}
									className="btn btn-success"
								>
									Grab some of my downloadables
								</button> */}
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
						id={jumbotronImgContainer}
						style={{
							clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)",
						}}
					>
						<img src="/img/global_static/jumbotron_bg.jpg" alt="Sorry bro" />
					</div>
				</div>
				<h1 className={newStartingTitle}>Try Some of the Blogs I made</h1>
				<div id={popularAchievements}>
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
