import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { marked } from "marked";
import { Giscus } from "@giscus/react";
import Head from "next/head";
import { useRouter } from "next/router";

const PostPage = ({
	frontmatter: { title, date, short_desc, source_img },
	content,
	slug,
}) => {
	return (
		<>
			<Head>
				<title>DarkLordDev | Blog - {slug}</title>
			</Head>
			<div className="go-back-btn-container">
				<Link href="/blog">
					<a>{"<--"} Go Back</a>
				</Link>
			</div>
			<div className="blog">
				<div className="blog-img">
					<img src={source_img} alt="Sorry Couldn't fetch the image" />
				</div>
				<div className="blog-details-title">
					<strong>{title}</strong>
					<p>posted on {date}</p>
				</div>
				<div className="markdown-body container mx-auto">
					<div dangerouslySetInnerHTML={{ __html: marked(content) }} />
				</div>
			</div>
			<hr className="my-5 bg-black" />
			<div className="comments container mx-auto my-2 p-3 shadow-md drop-shadow-md">
				<p className="text-gray-500">
					Please sign in through github to post a comment
				</p>
				<Giscus
					key={"Comments"}
					repo="DarkLordDev/darklorddev"
					repoId="R_kgDOG2MWqA"
					category="Ideas"
					categoryId="DIC_kwDOG2MWqM4CBKy0"
					mapping="title"
					reactionsEnabled="-"
					emitMetadata="0"
					theme="light"
					inputPosition="bottom"
				/>
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
