import React, { useEffect, useState } from "react";
import { battle } from "../utils/api";
import Card from "./Card";
import ProfileList from "./ProfileList";

function Results({ playerOne, playerTwo }) {
	const [winner, setWinner] = useState(null);
	const [loser, setLoser] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		battle([playerOne, playerTwo])
			.then((players) => {
				setWinner(players[0]);
				setLoser(players[1]);
				setError(null);
				setIsLoading(false);
			})
			.catch(({ message }) => {
				setError(message);
				setIsLoading(false);
			});
	}, []);

	if (isLoading === true) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p className="center-text error">{error}</p>;
	}

	return (
		<div className="grid space-around container-sm">
			<Card
				header={winner.score === loser.score ? "Tie" : "Winner"}
				subheader={`Score: ${winner.score.toLocaleString()}`}
				avatar={winner.profile.avatar_url}
				href={winner.profile.html_url}
				name={winner.profile.login}>
				<ProfileList profile={winner.profile} />
			</Card>
			<Card
				header={winner.score === loser.score ? "Tie" : "Loser"}
				subheader={`Score: ${loser.score.toLocaleString()}`}
				avatar={loser.profile.avatar_url}
				href={loser.profile.html_url}
				name={loser.profile.login}>
				<ProfileList profile={loser.profile} />
			</Card>
		</div>
	);
}

export default Results;
