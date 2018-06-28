import React from "react";

const DumbComponentExample = ({ welcome, cls, backgrondImage }) => {
	console.log(`url("${backgrondImage}")`);
	return (
		<div style={{ backgroundImage: `url(${backgrondImage})` }} className={cls}>
			<div className="overlay" />
			<div className="welcome-text">{welcome}</div>
		</div>
	);
};

export default DumbComponentExample;
