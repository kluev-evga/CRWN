import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


const OptionContainerStyles = css`
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;

    @media screen and (max-width: 640px) {
        font-size: 16px;
        padding: 8px;
    }
`;

export const HeaderContainer = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    display:flex;
    align-items: center;

    @media screen and (max-width: 640px) {
        width: 40px;
    }
`;

export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;