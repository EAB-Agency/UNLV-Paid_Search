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
            <Link to={closeTo}>Close</Link>
          ) : (
            <header>
              <h1>Please provide your contact information</h1>
            </header>
          )}
          <ContactForm />
        </>
      )}
    </ModalRoutingContext.Consumer>
  </Layout>
);
