const INFO = {
	main: {
		title: "Portfolio by Derrick Cleavall | Albuquerque, NM",
		name: "Derrick Cleavall",
		email: "dcleavallcodes@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		medium: "https://medium.com/@dcleavall/",
		github: "https://github.com/dcleavall/",
		linkedin: "https://www.linkedin.com/in/derrick-c-19659211a/",
		discord: "https://discord.com/channels/dcleavehacks/",
	},

	homepage: {
		title: "Software Developer | Albuquerque, NM",
		description:
			"I'm a full stack software developer with heavy emphasis in Python. I specialize in building scalable, secure, and reliable web applications. My goal is to provide high-quality code that follows best industry standards, pertaining to: design, infrastructure, and performance, of any service, product, or feature.",
		agencyNote:
			"Refer to my agency, TheCodingChicken, for more resources and information on how I can help you build your next project.",
	},	

	about: {
		title: "Derrick Cleavall | Albuquerque, NM",
		description:
			"End-to-end, I use various tools and technologies depending on client specifications. I primarily write programs in Javascript and Python with current frameworks/libraries. Continuously learning, sharpening skills, and adopting new practices in this abundant game.",
		skills: [
			"JavaScript",
			"Python",
			"React.js",
			"Flask",
			"PostgresSql",
			"SQLAlchemy",
			"API Integration (Stripe, Google, OpenAI)",
			"Deployment",
			"Design Architecture",
			"CI/CD",
			"Containerization (Docker)",
			"Version Control (Git)",
			"Frontend Development",
			"Backend Development",
		],
	},
	
	store: {
		title: "Store",
		description:
			"Welcome, check out the products below. *Note: This page is still under construction and will demonstrate Stripe API integration for payment processing.",
	},

	projects: [
		{
			title: "Project 1",
			description:
				"This project is a full-stack application that uses React.js on the frontend and Python on the backend. This application was built for a commercial real estate group that needed a way to organize their listings internally. It utilizes PostgresSql for the database, Google API to communicate with Google Drive, smtp for email automations, report lib auto-generating documents, and render for hosting services.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/dcleavall/Berkshire",
		},

		{
			title: "Project 2",
			description:
				"I built this project using a front end template from another developer. It has been customized for my own purposes. This integrates the Stripe API for payment processing and will remain a work-in-progress as I continue to add more features and functionality.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/dcleavall/portfolio",
		},
	],
};

export default INFO;
