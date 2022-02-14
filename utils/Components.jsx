import { useRouter } from "next/router";
import React from "react";

export const Card = ({
	imgSrc,
	title,
	content,
	btnStuff: { btnVal, btnOnClick, type },
}) => {
	return (
		<div className="card">
			<div className="main-card">
				<div className="card-img">
					<img src={imgSrc} alt="Sorry image couldn't be found" />
				</div>
				<div className="card-title">
					<strong>{title}</strong>
				</div>
				<div className="card-body">
					<p>{content}</p>
				</div>
				<div className="card-actions">
					<button onClick={btnOnClick} className={`btn btn-${type}`}>
						{btnVal}
					</button>
				</div>
			</div>
		</div>
	);
};

export const BlogItems = ({ post }) => {
	const router = useRouter();

	return (
		<div
			className="card-item"
			onClick={() => router.push(`/blog/${post.slug}`)}
		>
			<div className="card-item-date">{post.frontmatter.data}</div>
			<div className="card-item-title">{post.frontmatter.title}</div>
			<div className="card-item-desc">{post.frontmatter.short_desc}</div>
			<div className="card-item-actions">
				<a href={`/blog/${post.slug}`}>Read More</a>
			</div>
		</div>
	);
};
