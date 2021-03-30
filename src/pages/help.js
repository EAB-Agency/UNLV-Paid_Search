import React from 'react';
import { Layout, SEO } from 'components/common';
import { Link } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

const RedirectLocation = () => (window.location.href = '/');

export default () => {
  const isBrowser = typeof window !== 'undefined';
  return (
    <Layout>
      <SEO title="UNLV Help" location="/help" />
      <ModalRoutingContext.Consumer>
        {/* On page reload, will not be a modal so will not show close link */}
        {({ modal, closeTo }) => (
          <>
            {modal ? (
              <div className="help">
                <Link
                  to={closeTo}
                  className="close-btn"
                  state={{
                    noScroll: true,
                  }}
                >
                  Close
                </Link>
                <div className="head-content">
                  <h2>Help</h2>
                  <p>
                    If you require assistance in using this site, please contact the Help Center at{' '}
                    <a href="mailto:help@unlv.edu">help@unlv.edu.</a>
                  </p>
                </div>
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
