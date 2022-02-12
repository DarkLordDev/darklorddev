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
