import React from 'react';
import { Layout, SEO } from 'components/common';
import { Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import ContactForm from 'components/landing/Contact/ContactForm';

export default () => (
  <Layout>
    <SEO />
    <ModalRoutingContext.Consumer>
      {/* On page reload, will not be a modal so will not show close link */}
      {({ modal, closeTo }) => (
        <>
          {modal ? (
            <header className="contact-header">
              <Link to={closeTo} className="close-btn">
                Close
              </Link>
              <div className="head-content">
                <h1>Learn More About Degree Options and Financial Aid </h1>
                <p>Share your information and we’ll be in touch soon.</p>
              </div>
            </header>
          ) : (
            <header className="contact-header">
              <h1>Learn More About Degree Options and Financial Aid </h1>
              <p>Share your information and we’ll be in touch soon.</p>
            </header>
          )}
          <ContactForm />
        </>
      )}
    </ModalRoutingContext.Consumer>
  </Layout>
);
