import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogItems } from "../../utils/Components";

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

const BlogPage = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Blogs | DarkLordDev</title>
			</Head>
			<h1 className="container mx-auto overflow-hidden text-center text-2xl m-3 font-bold drop-shadow-md md:text-left md:text-4xl md:m-5">
				DarkLordDev Blogs
			</h1>
			<div className="blogs-container overflow-hidden">
				<div className="cards-container">
					{posts.map((post, index) => (
						<BlogItems key={index} post={post} />
					))}
				</div>
			</div>
		</>
	);
};

export default BlogPage;
