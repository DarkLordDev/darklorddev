import React from "react";
import Link from "next/link";
import { marked } from "marked";
import { Giscus } from "@giscus/react";
import Head from "next/head";
import {
	goBackBtnContainer,
	divider,
	blog,
	blogDetailsTitle,
	comments,
} from "../../styles/BlogPostPage.module.css";

export const getStaticPaths = async () => {
	const res = await fetch("https://darklorddevbackendapi.herokuapp.com/blogs", {
		method: "GET",
	});
	const json = await res.json();
	const paths = json.map((blog) => ({
		params: {
			slug: blog.slug,
		},
	}));

	// const paths = files.map((fileName) => ({
	// 	params: {
	// 		slug: fileName.replace(".md", ""),
	// 	},
	// }));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	console.log(slug);
	// const markdownWithMeta = fs.readFileSync(
	// 	path.join("posts", slug + ".md"),
	// 	"utf-8"
	// );
	const res = await fetch(
		`https://darklorddevbackendapi.herokuapp.com/blogs?slug=${slug}`,
		{
			method: "GET",
		}
	);
	const json = await res.json();
	const [...updjson] = json;
	const { content, ...frontmatter } = updjson[0];
	// const { data: frontmatter, content } = matter(markdownWithMeta);
	return {
		props: {
			frontmatter,
			content,
		},
	};
};

const BlogPostPage = ({
	frontmatter: { title, posted, short_desc, source_img },
	content,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div id={goBackBtnContainer} className="btn btn-danger">
				<Link href="/blog/">
					<a>
						<i className="fa-solid fa-arrow-left text-base"></i>
						<strong>View All Blogs</strong>
					</a>
				</Link>
			</div>
			<div className={blog}>
				<div className="blog-img">
					<img src={source_img} alt="Sorry Couldn't fetch the image" />
				</div>
				<div className={blogDetailsTitle}>
					<strong>{title}</strong>
					<p>posted on {posted}</p>
				</div>
				<div className="markdown-body container mx-auto">
					<div dangerouslySetInnerHTML={{ __html: marked(content) }} />
				</div>
			</div>
			<hr className={divider} />
			<div className={comments}>
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

export default BlogPostPage;
