import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItemContainer, Image, Content, Title, Subtitle } from './menu-item.styles';


const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();

    return (
        <MenuItemContainer size={size} onClick={() => navigate(linkUrl)}>
            <Image url={imageUrl} />
            <Content>
                <Title>{title}</Title>
                <Subtitle>SHOP NOW</Subtitle>
            </Content>
        </MenuItemContainer>
    );
};

export default MenuItem;