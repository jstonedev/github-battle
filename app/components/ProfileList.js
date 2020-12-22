import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import {
	FaCompass,
	FaBriefcase,
	FaUsers,
	FaUserFriends,
	FaCode,
	FaUser,
} from "react-icons/fa";

function ProfileList({ profile }) {
	const [hoveringLocation, setHoveringLocation] = useState(false);
	const [hoveringCompany, setHoveringCompany] = useState(false);

	return (
		<Fragment>
			<ul className="card-list">
				<li>
					<FaUser color="rgb(239, 115, 115)" size={22} />
					{profile.name}
				</li>
				{profile.location && (
					<li
						className="tooltip-container"
						onMouseOver={() => setHoveringLocation(true)}
						onMouseOut={() => setHoveringLocation(false)}>
						{hoveringLocation === true && (
							<div className="tooltip">User's location</div>
						)}
						<FaCompass color="rgb(144, 115, 255)" size={22} />
						{profile.location}
					</li>
				)}
				{profile.company && (
					<li
						className="tooltip-container"
						onMouseOver={() => setHoveringCompany(true)}
						onMouseOut={() => setHoveringCompany(false)}>
						{hoveringCompany === true && (
							<div className="tooltip">User's company</div>
						)}
						<FaBriefcase color="#795548" size={22} />
						{profile.company}
					</li>
				)}
				<li>
					<FaUsers color="rgb(129, 195, 245)" size={22} />
					{profile.followers.toLocaleString()} Followers
				</li>
				<li>
					<FaUserFriends color="rgb(64, 183, 95)" size={22} />
					{profile.following.toLocaleString()} Following
				</li>
			</ul>
		</Fragment>
	);
}

ProfileList.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileList;
