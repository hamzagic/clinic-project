import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Item } from './style';

const Sidebar = () => {
    return (
      <Container>
        <Link to="/messages"><Item>Messages</Item></Link>
        <Link to="/exams"><Item>Exams/Prescriptions</Item></Link>
        <Link to="/payments"><Item>Payments</Item></Link>
        <Link to="/profile"><Item>Profile</Item></Link>
      </Container>
    );
};

export default Sidebar;
