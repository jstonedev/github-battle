import React, { Fragment, useState } from "react";
import Instructions from "./Instructions";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import Results from "./Results";

function Battle() {
	const [playerOne, setPlayerOne] = useState(null);
	const [playerTwo, setPlayerTwo] = useState(null);
	const [battle, setBattle] = useState(false);

	if (battle) {
		return (
			<Results
				playerOne={playerOne}
				playerTwo={playerTwo}
				resetBattle={() => resetBattle()}
			/>
		);
	}

	function resetBattle() {
		setPlayerOne(null);
		setPlayerTwo(null);
		setBattle(false);
	}

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
				{playerOne && playerTwo && (
					<button
						className="btn dark-btn btn-space"
						onClick={() => setBattle(true)}>
						BATTLE
					</button>
				)}
			</div>
		</Fragment>
	);
}

export default Battle;
