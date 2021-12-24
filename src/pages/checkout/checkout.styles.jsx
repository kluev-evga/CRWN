import styled from 'styled-components';



export const CheckoutPageContainer = styled.div`
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    button{
        margin-left: auto;
        margin-top: 50px;
    }

    @media screen and (max-width: 1024px) {
        width: 650px;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    span {
        width: 23%;
        text-transform: uppercase;

        &:last-of-type{
            width: 8%;
        }

        @media screen and (max-width: 800px) {
            font-size: 14px;
        }

        @media screen and (max-width: 640px) {
            &:nth-of-type(2){
                display:none;
            }

            &:last-of-type{
                width: auto;
            }
        }
    }
`;

export const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    
    @media screen and (max-width: 800px) {
        font-size: 28px;
    }
`;

export const TestWarning = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;

    @media screen and (max-width: 800px) {
        font-size: 18px;
    }
`;