import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/Info';

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      title="About"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `programming`,
        `accountant`,
        `bookkeeping`,
        `taxconsulting`,
      ]}
    />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about__background"
    />
    <Info />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "about1-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
