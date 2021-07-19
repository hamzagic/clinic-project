import React from 'react'
import Input from '../components/Input'
import Text from '../components/Text'
import Button from '../components/Button'
import Wrapper from '../components/Wrapper'

const Register = (props) => {
    return (
        <Wrapper>
            <Text fontsize="40px" fontweight="bold">Register</Text>
            <Input type="text" placeholder="First Name" width="500px" />
            <Input type="text" placeholder="Last Name" width="500px" />
            <Input type="email" placeholder="Email" width="500px" />
            <Button bgColor="var(--success)" color="var(--white)" width="500px" fontweight="bold" fontsize="18px">Submit</Button>
            <Text fontsize="16px" fontweight="normal" padding="5px">Already registered? <b>Login</b></Text>
        </Wrapper>

    );
}

export default Register;