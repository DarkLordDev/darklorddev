import Head from "next/head";
import { BlogItems } from "../../utils/Components";
import {
	blogsContainer,
	cardsContainer,
	mainBlogHeader,
} from "../../styles/BlogPage.module.css";

export const getStaticProps = async () => {
	const res = await fetch("https://darklorddevbackendapi.herokuapp.com/blogs", {
		method: "GET",
	});
	const json = await res.json();
	const posts = json.map((blog) => ({
		slug: blog.slug,
		short_desc: blog.slug,
		posted: blog.posted,
		source_img: blog.source_img,
		title: blog.title,
	}));

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
