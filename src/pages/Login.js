import React from 'react'
import Input from '../components/Input'
import Text from '../components/Text'
import Button from '../components/Button'
import Wrapper from '../components/Wrapper'

const Login = (props) => {
    return (
        <Wrapper>
            <Text fontsize="40px" fontweight="bold">Login</Text>
            <Input type="email" placeholder="Email" width="500px" />
            <Button bgColor="var(--success)" color="var(--white)" width="500px" fontweight="bold" fontsize="18px">Login</Button>
            <Text fontsize="16px" fontweight="normal" padding="5px">Don't have an account? <b>Register</b></Text>
        </Wrapper>

    );
}

export default Login;