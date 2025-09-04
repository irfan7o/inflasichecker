import React from 'react';

const Contact = () => {
  return (
    <section id="contact-us" className="section bg-color contact-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid contact-grid">
          <div className="contact-div">
            <div className="common-heading-div">
              <h2
                data-w-id="33cea952-1e3f-56fd-f6ce-654f1dcebc17"
                style={{ opacity: 0 }}
                className="h2-heading contact-heading"
              >
                Send a message
              </h2>
              <p
                data-w-id="5cd87c47-5a86-199d-b68f-633e4607c94b"
                style={{ opacity: 0 }}
                className="paragraph"
              >
                We’re here to answer any question you may have.
              </p>
            </div>
            <div className="contact-detail-div">
              <div
                data-w-id="94fd3aca-2af7-4f47-f329-b6b6c7a89a00"
                style={{ opacity: 0 }}
                className="contact-info-div"
              >
                <div className="contact-icon-box">
                  <img
                    src="assets/cdn.prod.website-files.com/68232a202576061a3a9b6976/682c7ae81f6db7df2e58a796_call-icon.svg"
                    loading="lazy"
                    alt=""
                    className="contact-icon"
                  />
                </div>
                <div className="contact-info">
                  <div className="paragraph">Contact Number</div>
                  <div className="h4-heading">(017) 816-1999</div>
                </div>
              </div>
              <div
                data-w-id="20793c9d-10b3-aef0-ed10-5a1f7f608e4d"
                style={{ opacity: 0 }}
                className="contact-info-div"
              >
                <div className="contact-icon-box">
                  <img
                    src="assets/cdn.prod.website-files.com/68232a202576061a3a9b6976/682c7ae946d16460ac6e5b38_email-icon.svg"
                    loading="lazy"
                    alt=""
                    className="contact-icon"
                  />
                </div>
                <div className="contact-info">
                  <div className="paragraph">Email Address</div>
                  <div className="h4-heading">info@office.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-div">
            <div
              data-w-id="2eff5b49-422c-5c17-8681-c9e05845f944"
              style={{ opacity: 0 }}
              className="contact-form-div"
            >
              <div className="contact-form-block w-form">
                <form
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                  method="get"
                  data-wf-page-id="68232a202576061a3a9b6983"
                  data-wf-element-id="a6463ea9-5119-588f-1c99-9776d54d6406"
                >
                  <div className="w-layout-grid contact-form-grid">
                    <div className="contact-form-div">
                      <input
                        className="input w-input"
                        maxLength="256"
                        name="name"
                        data-name="Name"
                        placeholder="Full Name"
                        type="text"
                        id="name"
                      /><img
                        loading="lazy"
                        src="assets/cdn.prod.website-files.com/68232a202576061a3a9b6976/682c7ae95a09b708e1d39fa2_user-input-icon.svg"
                        alt=""
                        className="input-icon"
                      />
                    </div>
                    <div className="contact-form-div">
                      <input
                        className="input w-input"
                        maxLength="256"
                        name="email"
                        data-name="Email"
                        placeholder="Enter your email"
                        type="email"
                        id="email"
                        required=""
                      /><img
                        loading="lazy"
                        src="assets/cdn.prod.website-files.com/68232a202576061a3a9b6976/682c7ae99515853365d6747a_email-input-icon.svg"
                        alt=""
                        className="input-icon"
                      />
                    </div>
                    <div
                      id="w-node-_321bf47d-35a2-2c1c-3b70-5f0715708ed3-3a9b6983"
                      className="contact-form-div"
                    >
                      <textarea
                        id="field"
                        name="field"
                        maxLength="5000"
                        data-name="Field"
                        placeholder="Example Text"
                        className="input textarea w-input"
                      ></textarea>
                    </div>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    data-w-id="a6463ea9-5119-588f-1c99-9776d54d640d"
                    style={{
                      WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                    }}
                    className="common-button full-width w-button"
                    value="Submit a message"
                  />
                </form>
                <div className="success-message w-form-done">
                  <div className="paragraph success-text">
                    Thank you! Your submission has been received!
                  </div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;