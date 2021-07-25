import React from 'react';
import Register from './Register'
import Login from './Login'
import Appointments from './Appointments'
import Doctors from './Doctors'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Container from '../components/Container'
import { Switch, Route } from 'react-router-dom'

const Main = () => {
    return (
        <Container>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/appointments" component={Appointments} />
                <Route path="/doctors" component={Doctors} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Container>
    );
}

export default Main;