import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';
import { Container, Layout, SEO } from 'components/common';
import { Footer } from 'components/theme';
import { StaticImage } from 'gatsby-plugin-image';

export default () => (
  <Layout>
    <SEO />
    <header className="site-header">
      <div className="school-name">
        <Container>University of Las Vegas Nevada</Container>
      </div>
      <div className="school-logo">
        <Container>
          <div className="logo">UNLV</div>
        </Container>
      </div>
    </header>
    <main role="main" className="standard">
      <div className="page-wrap">
        <div className="content-head">
          <Container>
            <h1>
              <strong>5 Reasons to earn your degree</strong> from the <span className="featured">#1 Ranked*</span>{' '}
              Hospitality Management Program in the US
            </h1>
            <p>
              At the <strong>University of Nevada, Las Vegas</strong> College of Hospitality
            </p>
            <Link className="button top inquire" to="/contact" state={{ campaign: 'wue' }} asModal>
              Learn More About Our Program
            </Link>
          </Container>
        </div>

        <section className="landing-intro">
          <Container>
            <ul className="reasons">
              <li>
                <strong>Top-ranked hospitality</strong> and leisure management program in the country and #2 in the
                world.
              </li>
              <li>
                Opportunity to study, work, and <strong>intern in the heart of the industry.</strong>
              </li>
              <li>
                <strong>Low cost</strong> relative to comparable programs.
              </li>
              <li>
                Flexible curriculum that allows you to specialize in{' '}
                <strong>different segments of the industry.</strong>
              </li>
              <li>
                The right mix of management skills and hands-on training to{' '}
                <strong>make an immediate impact in your career.</strong>
              </li>
            </ul>
            <p>
              The <strong>Bachelor of Science degree in Hospitality Management</strong> offers a broad educational
              approach to prepare you with both the management theories and operational competencies necessary to{' '}
              <strong>start your career after graduation.</strong>
            </p>
          </Container>
        </section>
        <section className="graduates">
          <Container>
            <div className="intro">
              <h2>
                Hospitality College Graduates Don't Just Get Diplomas, <strong>They Get Jobs</strong>
              </h2>
              <p>
                Our focus on practical academics, including work, internships, and mentorship opportunities, provides
                graduates with highly marketable skills. And with around 100 recruiters visiting campus twice yearly,
                our students have unparalleled exposure to hiring employers. Below, you'll find a small sample of recent
                grads who leveraged their degrees into immediate job offers:
              </p>
            </div>
            <ul className="the-graduates">
              <li>
                <StaticImage
                  src="../assets/kristina_dean.jpeg"
                  alt="Kristina Dean - Food & beverage mangagement trainee"
                  placeholder="blurred"
                  loading="lazy"
                />
                <div className="content">
                  <p>Kristina Dean</p>
                  <h4>
                    <strong>Food & beverage management trainee</strong> (at a major hotel brand in Los Angeles)
                  </h4>
                  <p>San Diego, CA</p>
                </div>
              </li>
              <li>
                <StaticImage
                  src="../assets/evan_swieczkowski.jpeg"
                  alt="Evan Swieczkowski - Assistant golf professional"
                  placeholder="blurred"
                  loading="lazy"
                />
                <div className="content">
                  <p>Evan Swieczkowski</p>
                  <h4>
                    <strong>Assistant golf professional</strong> (at a popular country club in Las Vegas)
                  </h4>
                  <p>Las Vegas, NV</p>
                </div>
              </li>
              <li>
                <StaticImage
                  src="../assets/sonia_vazquez_quintero.jpeg"
                  alt="Sonia Vasquez-Quintero - Guest service agent"
                  placeholder="blurred"
                  loading="lazy"
                />
                <div className="content">
                  <p>Sonia Vasquez-Quintero</p>
                  <h4>
                    <strong>Guest service agent</strong> (at a luxury hotel in Las Vegas)
                  </h4>
                  <p>Hawaii</p>
                </div>
              </li>
            </ul>
          </Container>
        </section>

        <section className="finaid">
          <Container className="cols">
            <div className="col-60">
              <h2>
                Looking For Ways To Fund <strong>Your Education In Hospitality Management?</strong>
              </h2>
              <p>
                <strong>
                  We offer affordable tuition with financial aid options so you can afford a high-quality degree.
                </strong>
              </p>
              <p>Western Undergraduate Exchange (WUE) Scholarship</p>
              <ul>
                <li>Estimated $11,000 tuition savings for full-time enrollment</li>
                <li>No scholarship application necessary</li>
                <li>Renewable for 4 years and can be combined with other financial aid options</li>
              </ul>
              <p className="states">
                <strong>
                  WUE Scholarship for residents of Alaska, Arizona, California, Colorado, Hawaii, Idaho, Montana, New
                  Mexico, North Dakota, Oregon, South Dakota, Utah, Washington, Wyoming, Guam, and the Commonwealth of
                  the Northern Marianas Islands
                </strong>
              </p>
              <Link className="button middle inquire" to="/contact" state={{ campaign: 'wue' }} asModal>
                Contact Us to Learn More
              </Link>
            </div>
            <div className="col-40">
              <StaticImage
                src="../assets/hospitality-hall-building.jpg"
                alt="Hospitality Hall"
                className="hospitality-img"
                placeholder="blurred"
                loading="lazy"
              />
            </div>
          </Container>
        </section>

        <section className="band">
          <Container className="numbers">
            <div className="cols">
              <p>
                Duration: <strong>4 years</strong>
              </p>
              <p>
                Required Credits: <strong>120</strong>
              </p>
              <p>
                Location: <strong>UNLV Campus</strong>
              </p>
            </div>
            <h2>Tailor Your UNLV Hospitality Program to Fit Your Personal Goals</h2>
            <p>Design the hospitality degree that is right for you with our specialized concentration offerings.</p>
          </Container>
        </section>

        <section className="concentrations">
          <Container>
            <div className="cols">
              <article className="col-50">
                <h4>Event and Design Management</h4>
                <StaticImage
                  src="../assets/event-and-design-management.jpg"
                  alt="Event and Design Management"
                  placeholder="blurred"
                  loading="lazy"
                />
                <p>
                  Use your imagination and critical thinking skills to create and design unique event experiences. This
                  concentration is a perfect fit for students who are looking to explore careers in entertainment
                  management and event management.
                </p>
              </article>
              <article className="col-50">
                <h4>Gaming Management </h4>
                <StaticImage
                  src="../assets/gaming-management.jpg"
                  alt="Gaming Management"
                  placeholder="blurred"
                  loading="lazy"
                />
                <p>
                  Experience a one-of-a-kind curriculum with our gaming management concentration. Our curriculum cannot
                  be found anywhere else. The program is designed to equip you with the skills you need to succeed in
                  roles in casino operations, casino accounting, and gaming regulations.
                </p>
              </article>
            </div>
            <div className="cols">
              <article className="col-50">
                <h4>Innovative Restaurant Management</h4>
                <StaticImage
                  src="../assets/innovative-restaurant-management.jpg"
                  alt="Innovative Restaurant Management"
                  placeholder="blurred"
                  loading="lazy"
                />
                <p>
                  Learn the intricacies of food production, service, marketing, supervision, and financial management.
                  These skills will provide you with the foundation you need to perform in careers such as restaurant
                  and culinary management. Stand out in the restaurant industry with our innovative restaurant
                  management concentration.
                </p>
              </article>
              <article className="col-50">
                <h4>Hospitality Beverage Management</h4>
                <StaticImage
                  src="../assets/hospitality-and-beverage-management.jpg"
                  alt="Hospitality Beverage Management"
                  placeholder="blurred"
                  loading="lazy"
                />
                <p>
                  This program is best for students looking to begin careers in beverage operations, beverage
                  management, or beverage distribution. This sector of the hospitality industry is steadily growing and
                  offers unique opportunities for a fun and exciting career.
                </p>
              </article>
            </div>
          </Container>
        </section>

        <section className="testimonial">
          <Container>
            <div className="cols">
              <figure className="col">
                <StaticImage
                  src="../assets/andrew-insigne-director-of-event-marketing.jpg"
                  alt="Andrew Insigne ‘11 - Director of Event Marketing at TAO Group"
                  placeholder="blurred"
                  loading="lazy"
                />
              </figure>
              <div className="col quote">
                <h4>WHY UNLV?</h4>
                <p>
                  “People who graduate from the Hospitality College are nontraditional. We’re not going to be the people
                  working traditional 9-to-5 jobs. We go out and make an impact in the community and industry in ways
                  that guests will enjoy.”
                </p>
                <p>
                  <i>- Andrew Insigne ‘11 - Director of Event Marketing at TAO Group</i>
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="live-las-vegas">
          <Container className="content">
            <h2>
              Study, Learn, & Live in the Entertainment <strong>Capital of the World – Las Vegas</strong>
            </h2>
            <p>
              As one of the most-visited tourist destinations in the world, Las Vegas is also a top-three global leader
              in the hospitality industry.{' '}
              <strong>The UNLV campus is located just minutes from the Las Vegas Strip,</strong> which provides the
              perfect setting for students to gain hands-on, once-in-a-lifetime opportunities not found anywhere else.{' '}
            </p>
            <p>
              Las Vegas also offers an array of activities from sports events to outdoor recreation where you can be
              outside year-round.{' '}
              <strong>Las Vegas is a big part of who we are, it’s in our name, and why we call it home.</strong>
            </p>
          </Container>
        </section>

        <section className="video">
          <Container>
            <div className="cols">
              <div className="col-60 video">
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/e3Hrz7TcaJU?rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-40 quote">
                <h2>“You’re going to get the best education from some of the best professionals in the business.”</h2>
                <p>
                  <strong>Guy Fieri</strong> <span>UNLV College of Hospitality Alumnus</span>{' '}
                  <i>Restaurateur, Author, And Emmy Award Winning Television PresenterHost on Food Network</i>
                </p>
              </div>
            </div>
          </Container>
        </section>

        <aside className="cta">
          <Container>
            <Link className="button bottom inquire" to="/contact" state={{ campaign: 'wue' }} asModal>
              Get in Touch With us to Learn More About Our Program
            </Link>
          </Container>
        </aside>
      </div>
    </main>
    <Footer />
  </Layout>
);
