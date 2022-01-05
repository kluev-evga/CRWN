import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartIconContainer, Icon, ItemsCount } from './cart-icon.styles';


const CartIcon = () => {
    const itemsCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();

    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <Icon as={ShopingIcon} />
            <ItemsCount>{itemsCount}</ItemsCount>
        </CartIconContainer>
    );
};

export default CartIcon;