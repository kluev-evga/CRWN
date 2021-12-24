import styled from 'styled-components';


export const CollectionItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    button{
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover{
        >div:first-of-type{
            opacity: 0.8;
        }

        button{
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        button{
            min-width: unset;
            padding: 0 5px;
            display: flex;
        }
    }

    @media screen and (max-width: 640px) {
        height: 260px;

        button{
            top: 180px;
        }
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 95%;
    margin-bottom: 5px;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.url});
`;

export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    span:first-of-type{
        width: 90%;
        margin-bottom: 15px;
    }

    span:last-of-type{
        width: 10%;
    }
`;