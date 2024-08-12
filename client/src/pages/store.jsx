import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from 'react';
import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';
import INFO from '../data/user';
import SEO from '../data/seo';


import './styles/store.css';

const Store = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<HelmetProvider>
			<Helmet>
				<title>{`Store | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="store" />
				<div className="content-wrapper">
					<div className="store-logo-container">
						<div className="store-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="store-container">
						<div className="store-main">
							<div className="store-right-side">
								<div className="store-title">
									{INFO.store.title}
								</div>

								<div className="store-subtitle">
									{INFO.store.description}
								</div>
							</div>

							<div className="store-left-side">
								<div className="store-image-container">
									<div className="store-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</HelmetProvider>
	);
};

export default Store;