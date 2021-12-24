import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import { CollectionItemContainer, Image, Footer } from './collection-item.styles';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <Image url={imageUrl} />
            <Footer>
                <span>{name}</span>
                <span>{price}</span>
            </Footer>
            <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);