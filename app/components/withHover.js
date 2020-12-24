import React, { useState } from "react";

function withHover(Component) {
	return function WithHover(props) {
		const [hovering, setHovering] = useState(false);

		const mouseOver = () => {
			setHovering(true);
		};

		const mouseOut = () => {
			setHovering(false);
		};

		return (
			<div onMouseOver={mouseOver} onMouseOut={mouseOut}>
				<Component hovering={hovering} {...props} />
			</div>
		);
	};
}

export default withHover;
