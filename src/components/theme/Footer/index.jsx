import React from 'react';
import { Container } from 'components/common';
import { Link } from 'gatsby-plugin-modal-routing';
import { Wrapper, Flex, Links, Details } from './styles';

export const Footer = () => (
  <Wrapper className="site-footer">
    <Flex as={Container}>
      <Details>
        <div className="logo-footer">UNLV</div>
        University of Nevada, Las Vegas
        <br />
        4505 S. Maryland Pkwy.
        <br />
        Las Vegas, NV 89154
        <br />
        Phone: 702-895-3011
      </Details>
      <Links>
        <Flex>
          <Link className="button" to="/help" asModal>
            Help
          </Link>
          <Link className="button" to="/privacy" asModal>
            Privacy
          </Link>
        </Flex>
      </Links>
    </Flex>
  </Wrapper>
);
