import React from "react";

function Results(props) {
	return (
		<div>
			Results
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	);
}

export default Results;
