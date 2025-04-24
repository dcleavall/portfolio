import React from "react";

function article_1() {
	return {
		date: "15 July 2024",
		title: "Integrate Google Drive API",
		description:
			"Learn how to integrate Google Drive API into your web applications to store and retrieve files. This article will guide you through the process of setting up the API, authenticating users, and managing files.",
		keywords: [
			"Google Drive API",
			"Backend Development",
			"Cloud",
			"Python",
			"Flask",
			"Javascript",
			"Developer",
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
			"Learn how to automate email notifications on your web forms using Python, Flask, and smtplib. This article will guide you through the process of setting up a Flask application, creating a form, and sending email notifications using the smtplib library.",
		style: ``,
		keywords: [
			"Automation",
			"Python",
			"Flask",
			"Backend Developer",
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