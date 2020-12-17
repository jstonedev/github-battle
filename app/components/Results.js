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
			<div className="card bg-light">
				<h4 className="header-lg center-text">
					{winner.score === loser.score ? "Tie" : "Winner"}
				</h4>
				<img
					src={winner.profile.avatar_url}
					className="avatar"
					alt={`Avatar for ${winner.profile.login}`}
				/>
				<h4 className="center-text">Score: {winner.score.toLocaleString()}</h4>
				<h2 className="center-text">
					<a href={winner.profile.html_url} className="link">
						{winner.profile.login}
					</a>
				</h2>
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
			</div>
			<div className="card bg-light">
				<h4 className="header-lg center-text">
					{winner.score === loser.score ? "Tie" : "Loser"}
				</h4>
				<img
					src={loser.profile.avatar_url}
					className="avatar"
					alt={`Avatar for ${loser.profile.login}`}
				/>
				<h4 className="center-text">Score: {loser.score.toLocaleString()}</h4>
				<h2 className="center-text">
					<a href={loser.profile.html_url} className="link">
						{loser.profile.login}
					</a>
				</h2>
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
			</div>
		</div>
	);
}

export default Results;
