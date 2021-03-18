import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details></Details>
      <Links></Links>
    </Flex>
  </Wrapper>
);
