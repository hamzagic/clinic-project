/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    > a {
        text-decoration: none;
        font-size: 18px;
        letter-spacing: 0.2rem;
        padding: 15px;
        color: #000;
        cursor: pointer;
        border-bottom: 1px solid #ccc;
    }
`;
