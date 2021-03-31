import React from 'react';
import { Layout, SEO } from 'components/common';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <h1>NOT FOUND</h1>
    <p>
      You just hit a page that doesn&#39;t exist... the sadness. <Link to="/">Go Back Home</Link>
    </p>
  </Layout>
);
