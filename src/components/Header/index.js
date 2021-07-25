import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './style'

const Header = () => {
    return (
        <Container>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/appointments'>Appointments</Link>
            <Link to='/doctors'>Doctors</Link>
            <Link to='/profile'>Profile</Link>
        </Container>
    )
}

export default Header