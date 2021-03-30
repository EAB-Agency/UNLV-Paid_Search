import React from 'react';
import { Layout, SEO } from 'components/common';
import { Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Contact } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <ModalRoutingContext.Consumer>
      {/* On page reload, will not be a modal so will not show close link */}
      {({ modal, closeTo }) => (
        <>
          {modal ? (
            <div className="contact-header">
              <Link
                to={closeTo}
                className="close-btn"
                state={{
                  noScroll: true,
                }}
              >
                Close
              </Link>
              <Contact />
            </div>
          ) : (
            (window.location.href = '/')
          )}
        </>
      )}
    </ModalRoutingContext.Consumer>
  </Layout>
);
