import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';
import INFO from '../data/user';
import SEO from '../data/seo';
import ProductCard from '../components/store/ProductCard'; // Import ProductCard
import {products} from '../data/products'; 

import './styles/store.css';

const Store = () => {
  const [whoopData, setWhoopData] = useState([]);
  const [loadingWhoop, setLoadingWhoop] = useState(true);

  
  useEffect(() => {
    window.scrollTo(0, 0);

    fetch('/whoop-data')
    .then((res) => res.json())
    .then((data) => {
      setWhoopData(data);
      setLoadingWhoop(false);
    })
    .catch((err) => {
      console.error('Failed to fetch Whoop data:', err);
      setLoadingWhoop(false);
    });
  }, []);

  const currentSEO = SEO.find((item) => item.page === "store");

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
				{/* Product Cards */}
                <div className="products-section">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id} // Use a unique key
                      id={product.id} // Pass the id prop
                      name={product.name}
                      price={product.price}
                      description={product.description}
                    />
                  ))}
                </div>
              </div>

              <div className="store-left-side">
                <div className="store-image-container">
                  <div className="store-image-wrapper">
                    <img
                      src="about.jpg"
                      alt="about"
                      className="about-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-footer">
          <div className="whoop-section">
            <h2>Fitness Activity (Whoop)</h2>
            {loadingWhoop ? (
              <p>Loading fitness data...</p>
            ) : whoopData.length === 0 ? (
              <p>No recent workouts found.</p>
            ) : (
              <ul className="whoop-workout-list">
                {whoopData.map((workout) => (
                  <li key={workout.id} className="whoop-workout-item">
                    <strong>{new Date(workout.created_at).toLocaleDateString()}</strong>: {workout.sport_name} for {Math.round(workout.duration / 60)} minutes
                  </li>
                ))}
              </ul>
            )}
          </div>
            <Footer />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Store;
