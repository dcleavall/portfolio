import React from "react";

function article_1() {
	return {
		date: "15 July 2024",
		title: "Integrate Google Drive API",
		description:
			"Learn how to integrate Google Drive API into your web applications to store and retrieve files. This article will guide you through the process of setting up the API, authenticating users, and managing files.",
		keywords: [
			"Google Drive API",
			"Derrick Cleavall",
			"Derrick Cleavall Codes",
			"Derrick Cleavall Full-stack Developer",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "23 July 2024",
		title: "Email Automation with Python",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Email Automation on Forms using Python, Flask, and smtplib",
			"Derrick",
			"Derrick C",
			"Derrick Cleavall",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;