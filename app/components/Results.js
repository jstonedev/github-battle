import React, { useEffect } from "react";
import { battle } from "../utils/api";

function Results({ playerOne, playerTwo }) {
	useEffect(() => {
		battle([playerOne, playerTwo]).then((players) => {
			console.log("data: ", players);
		});
	});

	return (
		<div>
			Results
			{/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
		</div>
	);
}

export default Results;
