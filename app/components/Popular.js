import * as React from "react";
import LanguageNav from "./LanguageNav";
import { fetchPopularRepos } from "../utils/api";
export default class Popular extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedLanguage: "All",
			repos: {},
			error: null,
		};

		this.updateLanguage = this.updateLanguage.bind(this);
		this.isLoading = this.isLoading.bind(this);
	}
	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}
	updateLanguage(selectedLanguage) {
		this.setState({
			selectedLanguage,
			error: null,
		});

		if (!this.state.repos[selectedLanguage]) {
			fetchPopularRepos(selectedLanguage)
				.then((data) => {
					this.setState(({ repos }) => ({
						repos: {
							...repos,
							[selectedLanguage]: data,
						},
					}));
				})
				.catch((error) => {
					console.warn("Error fetching repos: ", error);

					this.setState({
						error: `There was an error fetching the repositories.`,
					});
				});
		}
	}
	isLoading() {
		const { selectedLanguage, repos, error } = this.state;

		return !repos[selectedLanguage] && error === null;
	}
	render() {
		const { selectedLanguage, repos, error } = this.state;

		return (
			<React.Fragment>
				<LanguageNav
					selected={selectedLanguage}
					onUpdateLanguage={this.updateLanguage}
				/>

				{this.isLoading() && <p>Loading...</p>}

				{error && <p>{error}</p>}

				{repos[selectedLanguage] && (
					<pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>
				)}
			</React.Fragment>
		);
	}
}
