import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartIconContainer, Icon, ItemsCount } from './cart-icon.styles';


const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <Icon as={ShopingIcon} />
        <ItemsCount>{itemsCount}</ItemsCount>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);