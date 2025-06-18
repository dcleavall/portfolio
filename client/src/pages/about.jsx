import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Slider from "react-slick";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  const sliderSettings = {
    vertical: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">{INFO.about.title}</div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description}
                </div>
                <br />
                <div className="about-skills">
                  <h3>Skills:</h3>
                  <div className="skills-slider">
                    <Slider {...sliderSettings}>
                      {INFO.about.skills.map((skill, index) => (
                        <div key={index} className="skill-slide">
                          {skill}
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>

              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img
                      src="about.jpg"
                      alt="about"
                      className="about-image"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
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

export default About;
