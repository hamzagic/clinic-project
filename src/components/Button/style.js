import styled from 'styled-components'

export const Container = styled.div`
    width: ${props => props.width};
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const Buttons = styled.button`
    width: ${props => props.width};
    max-width: 100%;
    padding: 10px 5px;
    background: ${props => props.bgColor};
    color: ${props => props.color};
    border-radius: 5px;
    font-size: ${props => props.fontsize};
    font-weight: ${props => props.fontweight};
    border: none;
    cursor: pointer;
`;