import React from 'react'
import { Container } from './style'

const Wrapper = props => {
    return(
        <Container>
            {props.children}
        </Container>
    )
}

export default Wrapper