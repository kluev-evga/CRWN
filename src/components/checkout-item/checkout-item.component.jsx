import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { removeItem } from '../../redux/cart/cart.actions';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, RemoveButton } from './checkout-item.styles';


const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <div onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;