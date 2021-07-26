import React from 'react';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

const Dashboard = () => {
    return (
      <>
        <Header />
        <Wrapper>
          <h1>Dashboard</h1>
          <div>Information about the patient agenda.</div>
          <div>Notifications.</div>
          <div>Messages from doctors and the app.</div>
        </Wrapper>
      </>
    );
};

export default Dashboard;
