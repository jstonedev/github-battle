import React, { useEffect, useState } from "react";
import {
	FaCompass,
	FaBriefcase,
	FaUsers,
	FaUserFriends,
	FaCode,
	FaUser,
} from "react-icons/fa";
import { battle } from "../utils/api";
import Card from "./Card";

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
				<ul className="card-list">
					<li>
						<FaUser color="rgb(239, 115, 115)" size={22} />
						{winner.profile.name}
					</li>
					{winner.profile.location && (
						<li>
							<FaCompass color="rgb(144, 115, 255)" size={22} />
							{winner.profile.location}
						</li>
					)}
					{winner.profile.company && (
						<li>
							<FaBriefcase color="#795548" size={22} />
							{winner.profile.company}
						</li>
					)}
					<li>
						<FaUsers color="rgb(129, 195, 245)" size={22} />
						{winner.profile.followers.toLocaleString()} Followers
					</li>
					<li>
						<FaUserFriends color="rgb(64, 183, 95)" size={22} />
						{winner.profile.following.toLocaleString()} Following
					</li>
				</ul>
			</Card>
			<Card
				header={winner.score === loser.score ? "Tie" : "Loser"}
				subheader={`Score: ${loser.score.toLocaleString()}`}
				avatar={loser.profile.avatar_url}
				href={loser.profile.html_url}
				name={loser.profile.login}>
				<ul className="card-list">
					<li>
						<FaUser color="rgb(239, 115, 115)" size={22} />
						{loser.profile.name}
					</li>
					{loser.profile.location && (
						<li>
							<FaCompass color="rgb(144, 115, 255)" size={22} />
							{loser.profile.location}
						</li>
					)}
					{loser.profile.company && (
						<li>
							<FaBriefcase color="#795548" size={22} />
							{loser.profile.company}
						</li>
					)}
					<li>
						<FaUsers color="rgb(129, 195, 245)" size={22} />
						{loser.profile.followers.toLocaleString()} Followers
					</li>
					<li>
						<FaUserFriends color="rgb(64, 183, 95)" size={22} />
						{loser.profile.following.toLocaleString()} Following
					</li>
				</ul>
			</Card>
		</div>
	);
}

export default Results;
