import React from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

const Appointments = () => {
    return (
      <>
        <Header />
        <Wrapper>
          <h1>Appointments</h1>
          <div>Create and Edit appointments</div>
          <div>Upcoming appointments</div>
        </Wrapper>
      </>
    );
};

export default Appointments;
