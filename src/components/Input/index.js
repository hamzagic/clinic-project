/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Inputs, Label } from './style';

const Input = (props) => {
    return (
      <Container>
        <Label fontsize={props.fontsize} fontweight={props.fontweight} width={props.width}>{props.label}</Label>
        <Inputs
          type={props.type}
          placeholder={props.placeholder}
          width={props.width}
          value={props.value}
          onChange={props.onChange}
        />
      </Container>
    );
};

export default Input;
