import styled from 'styled-components';


export const CartIconContainer = styled.div`
    width: 36px;
    height: 36px;
    margin-left: 14px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width: 640px) {
        margin-left: 10px;
        width: 30px;
        height: 30px;
    }
`;

export const Icon = styled.div`
    width: 36px;
    height: 36px;
    margin-bottom: 12px;
`;

export const ItemsCount = styled.div`
    position: absolute;
    font-size: 16px;
    font-weight: bold;
    bottom: 10px;

    @media screen and (max-width: 640px) {
        font-size: 14px;
        bottom: 8px;
    }
`;