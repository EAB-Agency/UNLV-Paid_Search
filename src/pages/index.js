import React from 'react';
import { Layout, SEO } from 'components/common';
import ContactForm from 'components/landing/Contact/ContactForm';

export default () => (
  <Layout>
    <SEO />
    <div class="page-wrap">
    <h1>UNLV Paid Search</h1>

    <main role="main" className="lp-main page-main">

      <section className="lp-intro-form">
        <div className="center">
            <div className="lp-intro-form-content">
                <div className="lp-intro" id="intro">
                    <h2 className="lp-apply-title">Welcome!</h2>
                    <p>Intro copy that welcomes the student and introduces the school.</p>
                </div>
                <div className="lp-form">
                    <div className="lp-form-initial form-initial" id="form-initial">
                        <div className="lp-form-intro" id="form-intro">
                            <h3 className="lp-form-title">Tell Me More!</h3>
                            <p><strong>Interested in learning how global-token=school-name-alt can help you reach your goals and earn your degree?</strong> Complete the brief form below, and we will be in touch with more details about the programs we offer.</p>
                        </div>
                        <div className="lp-form-fields">
                            <ContactForm />
                        </div>
                        <div className="lp-form-footer" id="form-footer"></div>
                    </div>
                    
                </div>
            </div>
        </div>
      </section>

      <section className="lp-school">
        <div className="center lp-school-wrapper">
          <div className="lp-school-content">
            global-token=lp-school-content-static
          </div>
        </div>
      </section>

      <section className="lp-apply-btm">
        <div className="center lp-apply-btm-wrapper">
          <div className="lp-apply-btm-content">
            <div className="lp-apply-btm-copy">
              global-token=lp-apply-cta-intro
            </div>
            
            <div className="apply-form lp-apply-btm-form" id="apply-btm-form">
                            <ContactForm />
            </div>
            
            <div className="lp-apply-btm-footer">
              <p>Extra info about requirements, deadlines, etc.</p>
            </div>
          </div>
        </div>
      </section>

    </main>

  </div>
  

  </Layout>
);
