import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import PropTypes from "prop-types";

function PlayerPreview({ username, onReset, label }) {
	return (
		<div className="column player">
			<h3 className="player-label">{label}</h3>
			<div className="row bg-light">
				<div className="player-info">
					<img
						src={`https://github.com/${username}.png?size=200`}
						alt={`Avatar for ${username}`}
						className="avatar-small"
					/>
					<a href={`https://github.com/${username}`} className="link">
						{username}
					</a>
				</div>
				<button className="btn-clear flex-center" onClick={onReset}>
					<FaTimesCircle color="rgb(194, 57, 42)" size={26} />
				</button>
			</div>
		</div>
	);
}

PlayerPreview.propTypes = {
	username: PropTypes.string.isRequired,
	onReset: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
};

export default PlayerPreview;
