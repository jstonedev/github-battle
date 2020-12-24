import React, { useState } from "react";
import PropTypes from "prop-types";
import withHover from "./withHover";

function Tooltip({ text, children, hovering }) {
	return (
		<div className="tooltip-container">
			{hovering === true && <div className="tooltip">{text}</div>}
			{children}
		</div>
	);
}

Tooltip.propTypes = {
	text: PropTypes.string.isRequired,
	hovering: PropTypes.bool.isRequired,
};

export default withHover(Tooltip);
