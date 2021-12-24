import React from 'react';
import { withRouter } from 'react-router-dom';
import {MenuItemContainer, Image, Content, Title, Subtitle} from './menu-item.styles';


const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <Image url={imageUrl} />
            <Content>
                <Title>{title}</Title>
                <Subtitle>SHOP NOW</Subtitle>
            </Content>
        </MenuItemContainer>
);

export default withRouter(MenuItem);