import React from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

const Doctors = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <h1>Doctors</h1>
        <div>Search doctors</div>
        <div>Exchange messages between patient and doctor</div>
      </Wrapper>
    </>
  );
};

export default Doctors;
