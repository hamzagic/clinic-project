import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Input from '../components/Input'
import Text from '../components/Text'
import Button from '../components/Button'
import Wrapper from '../components/Wrapper'

import { useHistory } from 'react-router-dom'

import { login } from '../store/login/login'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const dispatch = useDispatch()

    const handleLogin = () => {
        // todo: proper validations and route auth redirection rules
        const data = {
            email,
            password
        }
        dispatch(login(data))
        history.push("/dashboard")
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const goToRegisterPage = () => {
        history.push('/register')
    }

    return (
        <Wrapper>
            <Text fontsize="40px" fontweight="bold">Login</Text>
            <Input type="email" placeholder="Email" width="500px" value={email} onChange={handleEmail} />
            <Input type="password" placeholder="Password" width="500px" value={password} onChange={handlePassword} />
            <Button bgColor="var(--success)" color="var(--white)" width="500px" fontweight="bold" fontsize="18px" handleSubmit={handleLogin}>Login</Button>
            <Text fontsize="16px" fontweight="normal" padding="5px">Don't have an account? 
                <b style={{cursor: 'pointer'}} onClick={goToRegisterPage}> Register</b>
            </Text>
        </Wrapper>

    );
}

export default Login;