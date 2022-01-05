import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartdropdownContainer, Items, EmptyMessage } from './cart-dropdown.styles';


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <CartdropdownContainer>
            <Items>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </Items>
            <CustomButton
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden());
                }}>
                GO TO CHECKOUT
            </CustomButton>
        </CartdropdownContainer>
    );
}

export default CartDropdown;