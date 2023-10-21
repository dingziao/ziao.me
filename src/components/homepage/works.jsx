import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./momenta.png"
								alt="momenta"
								className="work-image"
							/>
							<div className="work-title">Momenta</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">May 2023 - Aug 2023</div>
						</div>

						<div className="work">
							<img
								src="./zoom.png"
								alt="zoom"
								className="work-image"
							/>
							<div className="work-title">Zoom</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">Aug 2022 - Nov 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
