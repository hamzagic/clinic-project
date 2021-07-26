/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import Text from '../components/Text';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

import { createPayload } from '../store/register/register';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.register);

  const handleSubmit = () => {
    const clearFields = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    };

    // todo: proper validations and route auth redirection rules
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(createPayload(data));
    clearFields();
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const goToLoginPage = () => {
    history.push('/login');
  };
  return (
    <Wrapper>
      <Text fontsize="40px" fontweight="bold">Register</Text>
      <Input
        type="text"
        placeholder="First Name"
        width="500px"
        value={firstName}
        onChange={handleFirstName}
      />

      <Input
        type="text"
        placeholder="Last Name"
        width="500px"
        value={lastName}
        onChange={handleLastName}
      />

      <Input
        type="email"
        placeholder="Email"
        width="500px"
        value={email}
        onChange={handleEmail}
      />

      <Input
        type="password"
        placeholder="Password"
        width="500px"
        value={password}
        onChange={handlePassword}
      />

      <Button bgColor="var(--success)" color="var(--white)" width="500px" fontweight="bold" fontsize="18px" handleSubmit={handleSubmit}>Submit</Button>
      <Text fontsize="16px" fontweight="normal" padding="5px">
        Already registered?
        {' '}
        <b onClick={goToLoginPage} style={{ cursor: 'pointer' }}>Login</b>
      </Text>
      {user.firstName}
    </Wrapper>
  );
};

export default Register;
