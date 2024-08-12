import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Update import

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch contact data if needed
    fetch('/contact')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Contact data retrieval failed');
        }
      })
      .then((data) => {
        setContactData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = {
      full_name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('Form submitted successfully!');
          // Optionally clear the form or show a success message
          event.target.reset();
        } else {
          return response.text().then(errorMessage => {
            throw new Error(errorMessage || 'Failed to submit form');
          });
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error.message);
      });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">Connect With Me</div>

            <div className="subtitle contact-subtitle">
              Thank you for your interest in connecting with me. If you
              would like to collaborate or work together, please feel free to
              email me directly at{" "}
              <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I
              typically respond to inquiries within a 24-hour time period.
              Alternatively, you can use the contact form below to get in
              touch. Simply fill out the required fields, and I'll get back to
              you as soon as possible. I'm active on my social platforms and
              engage with my community there. Please feel free to reach out
              with any questions, feedback, or ideas. Thanks again for your
              interest, and I look forward to hearing from you!
            </div>

            {/* Display fetched contact data */}
            {contactData && contactData.length > 0 && (
              <div className="contact-data">
                <h2>Contact Information</h2>
                <ul>
                  {contactData.map((item, index) => (
                    <li key={index}>
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <br />

          <div className="socials-form-container">
            <div className="contact-socials">
              <Socials />
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit">Submit</button>
              </form>
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

export default Contact;
