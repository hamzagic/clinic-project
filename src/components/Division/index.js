/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Container } from './style';

const Division = (props) => {
    return (
      <Container>{props.children}</Container>
    );
};

export default Division;
