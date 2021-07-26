/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 200px;
  max-width: 20vw;
  background-color: var(--sidebar);
  height: 100vh;
  > a {
    text-decoration: none;
  }
`;

export const Item = styled.div`
  padding: 20px;
  color: var(--primary);
`;
