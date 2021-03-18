import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';
import { Layout, SEO } from 'components/common';

export default () => (
  <Layout>
    <SEO />
    <div className="page-wrap">
      <h1>UNLV Paid Search</h1>

      <main role="main" className="lp-main page-main">
        <section>
          <h2 className="lp-apply-title">Welcome!</h2>
          <p>Intro copy that welcomes the student and introduces the school.</p>
          <h3 className="lp-form-title">Tell Me More!</h3>
          <p>
            <strong>
              Interested in learning how global-token=school-name-alt can help you reach your goals and earn your
              degree?
            </strong>{' '}
            Complete the brief form below, and we will be in touch with more details about the programs we offer.
          </p>
          <Link to="/contact" asModal>
            Contact Us
          </Link>
        </section>
      </main>
    </div>
  </Layout>
);
