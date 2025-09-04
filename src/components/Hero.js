import React from 'react';

const Hero = () => {
  return (
    <div
      data-w-id="3a681253-1685-09c7-09d6-3180475d4ff0"
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="header w-nav"
    >
      <div className="nav-background-gradient"></div>
      <div className="nav-wrapper">
        <div className="container w-container">
          <div className="nav-div">
            <a href="#home" className="nav-logo-link w-nav-brand"
              ><img
                src="assets/cdn.prod.website-files.com/68232a202576061a3a9b6976/682c7af3b3b1f09314393086_ff9fa41b2b00c11dae9ad1941ebb148a_logo.svg"
                loading="lazy"
                alt="Logo"
                className="nav-logo"
            /></a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="#calculator" className="nav-link w-inline-block">
                <div className="nav-link-text">Calculator</div>
              </a>
              <a href="#inflation-rates" className="nav-link w-inline-block">
                <div className="nav-link-text">Inflation Rates</div>
              </a>
              <a href="#investment" className="nav-link w-inline-block">
                <div className="nav-link-text">Investment</div>
              </a>
            </nav>
            <div className="nav-button-div">
              <a
                data-w-id="22303fc2-3033-ec12-f6b1-548fde7d1356"
                style={{
                  background: '#0044eb',
                  color: '#ffffff',
                  borderRadius: '999px',
                  padding: '10px 24px',
                  display: 'inline-block',
                  WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                  transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                }}
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                className="app-link-block w-inline-block"
              >
                <div>Check Inflasi</div>
              </a>
              <div className="menu-button w-nav-button">
                <div
                  data-is-ix2-target="1"
                  className="menu-toggle"
                  data-w-id="ae0e1802-84a9-6232-7bad-f1ff5bd34b7c"
                  data-animation-type="lottie"
                  data-src="https://cdn.prod.website-files.com/68232a202576061a3a9b6976/683842b6eef7ec4af7e68765_menu.json"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="0"
                  data-duration="2.0020019204587935"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;