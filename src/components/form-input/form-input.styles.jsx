import styled, { css } from 'styled-components';


const shrink = css`
    top: -14px;
    font-size: 12px;
    color: black;
`;

export const Group = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const Input = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;;
    margin: 25px 0;

    &:focus {
        outline: none;
    }
  
    &:focus ~ label {
        ${shrink}
    }

    &[type='password'] {
        letter-spacing: 0.3em;
    }
`;

const getLabelStyles = ({ value }) => {
    return (value.length) && shrink
}

export const Label = styled.label`
    color: grey;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${getLabelStyles}
`;