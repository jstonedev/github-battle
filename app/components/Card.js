import React from "react";
import PropTypes from "prop-types";

function Card({ header, subheader, avatar, href, name, children }) {
	return (
		<div className="card bg-light">
			<h4 className="header-lg center-text">{header}</h4>
			<img src={avatar} className="avatar" alt={`Avatar for ${name}`} />
			{subheader && <h4 className="center-text">{subheader}</h4>}
			<h2 className="center-text">
				<a href={href} className="link">
					{name}
				</a>
			</h2>
			{children}
		</div>
	);
}

Card.propTypes = {
	header: PropTypes.string.isRequired,
	subheader: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default Card;
