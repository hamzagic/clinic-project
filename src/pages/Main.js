import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Register from './Register';
import Login from './Login';
import Appointments from './Appointments';
import Doctors from './Doctors';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Container from '../components/Container';
import Division from '../components/Division';
import Sidebar from '../components/Sidebar';
import Exams from './Exams';
import Messages from './Messages';
import Payments from './Payments';

const Main = () => {
  const logged = useSelector((state) => state.login.logged);
  return (
    <Division>
      {logged && <Sidebar />}
      <Container>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/appointments" component={Appointments} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/profile" component={Profile} />
          <Route path="/exams" component={Exams} />
          <Route path="/messages" component={Messages} />
          <Route path="/payments" component={Payments} />
        </Switch>
      </Container>
    </Division>
  );
};

export default Main;
