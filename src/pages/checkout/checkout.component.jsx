import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { CheckoutPageContainer, Header, Total, TestWarning } from './checkout.styles';



const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <Header>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </Header>

        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}

        <Total>TOTAL: ${total}</Total>

        <TestWarning>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 12/25 - CVV: 123
        </TestWarning>

        <StripeCheckoutButton price={total} />

    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);