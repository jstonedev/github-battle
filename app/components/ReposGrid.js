import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
	FaUser,
	FaStar,
	FaCodeBranch,
	FaExclamationTriangle,
} from "react-icons/fa";

function ReposGrid({ repos }) {
	return (
		<Fragment>
			<ul className="grid space-around">
				{repos.map((repo, index) => {
					const {
						name,
						owner,
						html_url,
						stargazers_count,
						forks,
						open_issues,
					} = repo;
					const { login, avatar_url } = owner;

					return (
						<li key={html_url} className="card bg-light">
							<h4 className="header-lg center-text">#{index + 1}</h4>
							<img
								src={avatar_url}
								alt={`Avatar for ${login}`}
								className="avatar"
							/>
							<h2 className="center-text">
								<a href={html_url} className="link">
									{login}
								</a>
							</h2>
							<ul className="card-list">
								<li>
									<FaUser color="rgb(255, 191, 116)" size={22} />
									<a href={`https://github.com/${login}`}>{login}</a>
								</li>
								<li>
									<FaStar color="rgb(255, 215, 0)" size={22} />
									{stargazers_count.toLocaleString()} Stars
								</li>
								<li>
									<FaCodeBranch color="rgb(129, 195, 245)" size={22} />
									{forks.toLocaleString()} Forks
								</li>
								<li>
									<FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
									{open_issues.toLocaleString()} Open Issues
								</li>
							</ul>
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
}

ReposGrid.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default ReposGrid;
