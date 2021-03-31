import React from 'react';
import { Layout, SEO } from 'components/common';
import { Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Contact } from 'components/landing';

const RedirectLocation = () => (window.location.href = '/');

export default ({ location }) => {
  const isBrowser = typeof window !== 'undefined';
  const { campaign } = location.state || 'default';
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
                <Contact campaign={campaign} />
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
