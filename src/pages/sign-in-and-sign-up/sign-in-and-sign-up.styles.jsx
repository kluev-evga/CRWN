import styled from 'styled-components';


export const SignInAndSignUpContainer = styled.div`
    max-width: 850px;
    margin: 30px auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    
    @media screen and (max-width: 1024px) {
        max-width: 680px;
    }

    @media screen and (max-width: 800px) {
        max-width: unset;
    }

    @media screen and (max-width: 640px) {
        max-width: 350px;
        display: block;
    }
`;


export const Button = styled.h2`
    text-align: center;
`;