import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./freelance.png"
								alt="freelance"
								className="work-image"
							/>
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./plant.png"
								alt="cultivator"
								className="work-image"
							/>
							<div className="work-title">Cultivator</div>
							<div className="work-subtitle">
								Production & Dynamics
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
