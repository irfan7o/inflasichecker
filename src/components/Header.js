import React from 'react';

const Header = () => {
  return (
    <section className="top-banner-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="top-banner-div">
          <div className="small-paragraph white-text">
            Sign up today and get 20% off — applied instantly at checkout.
          </div>
          <a href="#contact-us" className="text-link w-inline-block">
            <div>Learn More</div>
            <img
              src="assets/cdn.prod.website-files.com/68232a202576061a3a9b6976/682c7af2c506b066bc14b935_text-arrow-icon.svg"
              loading="lazy"
              alt=""
              className="text-link-arrow-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;