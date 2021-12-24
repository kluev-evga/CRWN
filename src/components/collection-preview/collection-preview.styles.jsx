import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title = styled(Link)`
    font-size: 28px;
    margin-bottom: 25px;
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;