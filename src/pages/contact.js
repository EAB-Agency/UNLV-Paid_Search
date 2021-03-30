import React from 'react';
import { Layout, SEO } from 'components/common';
import { Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Contact } from 'components/landing';
import { Redirect } from '@reach/router';

const RedirectLocation = () => (window.location.href = '/');

export default () => {
  const isBrowser = typeof window !== 'undefined';
  return (
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
              isBrowser && <RedirectLocation />
            )}
          </>
        )}
      </ModalRoutingContext.Consumer>
    </Layout>
  );
};
