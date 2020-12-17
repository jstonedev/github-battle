import React from "react";
import PropTypes from "prop-types";

function LanguageNav({ selected, onUpdateLanguage }) {
	const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

	return (
		<div>
			<ul className="flex-center">
				{languages.map((language) => (
					<li key={language}>
						<button
							className="btn-clear nav-link"
							style={
								language === selected
									? {
											color: "rgb(187, 46, 31)",
									  }
									: null
							}
							onClick={() => onUpdateLanguage(language)}>
							{language}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

LanguageNav.propTypes = {
	selected: PropTypes.string.isRequired,
	onUpdateLanguage: PropTypes.func.isRequired,
};

export default LanguageNav;
