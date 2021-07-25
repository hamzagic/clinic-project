import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px;
`;

export const Inputs = styled.input`
    width: ${props => props.width};
    max-width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    line-height: 30px;
    padding: 2px;
    font-size: 16px;
    
    ::placeholder {
        padding-left: 5px;
    }

    
`;

export const Label = styled.div`
    width: ${props => props.width};
    max-width: 100%;
    font-size: ${props => props.fontsize};
    font-weight: ${props => props.fontweight};
    margin-bottom: 3px;
`;