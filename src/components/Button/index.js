import React from 'react'
import { Container, Buttons } from './style'

const Button = props => {
    return (
        <Container>
            <Buttons 
            bgColor={props.bgColor} 
            width={props.width}
            color={props.color}
            fontweight={props.fontweight}
            fontsize={props.fontsize}>
                {props.children}
            </Buttons>
        </Container>
    );
}

export default Button