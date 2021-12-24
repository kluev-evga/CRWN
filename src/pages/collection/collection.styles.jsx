import styled from 'styled-components';


export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 30px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
    }
`;