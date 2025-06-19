import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";  // <-- import motion

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
						<motion.img
						src="/freelance.png"
						alt="freelance"
						className="work-image"
						animate={{ scale: [1, 1.05, 1] }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
						/>

							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
						<motion.img
						src="/plant.png"
						alt="plant"
						className="work-image"
						animate={{ scale: [1, 1.05, 1] }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
