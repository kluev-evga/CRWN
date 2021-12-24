import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartdropdownContainer, Items, EmptyMessage } from './cart-dropdown.styles';


const CartDropdown = ({ cartItems, history, dispatch }) => (
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
    </CartdropdownContainer >
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));