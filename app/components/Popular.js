import React, { Fragment, useEffect, useState } from "react";
import LanguageNav from "./LanguageNav";
import { fetchPopularRepos } from "../utils/api";

export default function Popular() {
	const [selectedLanguage, setSelectedLanguage] = useState("All");
	const [repos, setRepos] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		updateLanguage(selectedLanguage);
	}, []);

	const updateLanguage = (languageSelected) => {
		setSelectedLanguage(languageSelected);
		setRepos(null);
		setError(null);

		fetchPopularRepos(languageSelected)
			.then((repos) => setRepos(repos))
			.then(() => setError(null))
			.catch(() => {
				console.warn("Error fetching repos: ", error);
				setError("There was an error fetching the repositiories!");
			});
	};

	const isLoading = () => {
		return repos === null && error === null;
	};

	return (
		<Fragment>
			<LanguageNav
				selected={selectedLanguage}
				onUpdateLanguage={updateLanguage}
			/>

			{isLoading() && <p>Loading...</p>}

			{error && <p>{error}</p>}

			{repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
		</Fragment>
	);
}
