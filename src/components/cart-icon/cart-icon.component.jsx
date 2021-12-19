import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopingIcon className='shopping-icon' />
        <span className='item-count'>{itemsCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);