import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function PlayerInput({ onSubmit, label }) {
	const [username, setUsername] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit(username);
	};

	const handleInputChange = (e) => {
		setUsername(e.target.value);
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit} className="column player">
				<label htmlFor="username" className="player-label">
					{label}
				</label>
				<div className="row player-inputs">
					<input
						type="text"
						className="input-light"
						id="username"
						placeholder="github username"
						value={username}
						onChange={handleInputChange}
						autoComplete="off"
					/>
					<button type="submit" disabled={!username} className="btn dark-btn">
						Submit
					</button>
				</div>
			</form>
		</Fragment>
	);
}

PlayerInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
};

export default PlayerInput;
