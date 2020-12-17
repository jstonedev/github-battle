import React, { Fragment, useState } from "react";
import Instructions from "./Instructions";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

function Battle() {
	const [playerOne, setPlayerOne] = useState(null);
	const [playerTwo, setPlayerTwo] = useState(null);

	return (
		<Fragment>
			<Instructions />

			<div className="players-container">
				<h1 className="center-text header-lg">Players</h1>
				<div className="row space-around">
					{playerOne === null ? (
						<PlayerInput
							label="Player One"
							onSubmit={(player) => setPlayerOne(player)}
						/>
					) : (
						<PlayerPreview
							username={playerOne}
							label="Player One"
							onReset={() => setPlayerOne(null)}
						/>
					)}
					{playerTwo === null ? (
						<PlayerInput
							label="Player Two"
							onSubmit={(player) => setPlayerTwo(player)}
						/>
					) : (
						<PlayerPreview
							username={playerTwo}
							label="Player Two"
							onReset={() => setPlayerTwo(null)}
						/>
					)}
				</div>
			</div>
		</Fragment>
	);
}

export default Battle;
