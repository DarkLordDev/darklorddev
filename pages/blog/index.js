import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogItems } from "../../utils/Components";
import {
	blogsContainer,
	cardsContainer,
	mainBlogHeader,
} from "../../styles/BlogPage.module.css";

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
			<h1 className={mainBlogHeader}>DarkLordDev Blogs</h1>
			<div className={blogsContainer}>
				<div className={cardsContainer}>
					{posts.map((post, index) => (
						<BlogItems key={index} post={post} />
					))}
				</div>
			</div>
		</>
	);
};

export default BlogPage;
