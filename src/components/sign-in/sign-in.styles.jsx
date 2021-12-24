import styled from 'styled-components';


export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        margin: 10px 0;

        @media screen and (max-width: 640px) {
            display: none;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        button:first-of-type{
            min-width: 100px;
        }
    }

    @media screen and (max-width: 800px) {
        button {
            padding: 0 20px;
            min-width: 150px;
        }
    
        button:first-of-type{
            min-width: 90px;
        }
    }

`;