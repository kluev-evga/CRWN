import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import { CollectionItemContainer, Image, Footer } from './collection-item.styles';


const CollectionItem = ({ item }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <Image url={imageUrl} />
            <Footer>
                <span>{name}</span>
                <span>{price}</span>
            </Footer>
            <CustomButton inverted onClick={() => dispatch(addItem(item))}>Add to cart</CustomButton>
        </CollectionItemContainer>
    );
};

export default CollectionItem;