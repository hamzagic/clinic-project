/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Wrapper } from './style';

const Container = (props) => {
    return (
      <Wrapper>{props.children}</Wrapper>
    );
};

export default Container;
