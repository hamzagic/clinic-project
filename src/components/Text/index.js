import React from 'react'

import { Container, Texts } from './style'

const Text = props => {
    return(
        <Container>
            <Texts 
            fontsize={props.fontsize} 
            fontweight={props.fontweight}
            padding={props.padding}>
                {props.children}
            </Texts>
        </Container>
    )
}

export default Text