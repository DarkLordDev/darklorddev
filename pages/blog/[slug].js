import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { marked } from "marked";

const PostPage = ({ frontmatter: { title, date, short_desc }, content }) => {
	return (
		<>
			<div className="go-back-btn-container">
				<Link href="/blog">
					<a>{"<--"} Go Back</a>
				</Link>
			</div>
			<div className="blog">
				<div className="blog-details-title">
					<strong>{title}</strong>
					<p>posted on {date}</p>
				</div>
				<div className="markdown-body container mx-auto">
					<div dangerouslySetInnerHTML={{ __html: marked(content) }} />
				</div>
			</div>
		</>
	);
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = ({ params: { slug } }) => {
	const markdownWithMeta = fs.readFileSync(
		path.join("posts", slug + ".md"),
		"utf-8"
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
};

export default PostPage;
