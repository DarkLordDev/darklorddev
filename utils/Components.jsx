import React from "react";

export const Card = ({
	imgSrc,
	title,
	content,
	btnStuff: { btnVal, btnOnClick },
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
					<button onClick={btnOnClick} className="btn btn-primary">
						{btnVal}
					</button>
				</div>
			</div>
		</div>
		// <div className="card">
		// 	<div className="main-card">
		// 		<div className="card-img">
		// 			<img src="https://dummyimage.com/600x400/000/fff" alt="" />
		// 		</div>
		// 		<div className="card-title">
		// 			<strong>This is Title</strong>
		// 		</div>
		// 		<div className="card-content">this is a demo desc</div>
		// 		<div className="card-actions">
		// 			<button className="btn btn-primary">Read More</button>
		// 		</div>
		// 	</div>
		// </div>
	);
};
