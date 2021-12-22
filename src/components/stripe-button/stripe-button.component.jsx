import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jsnf2LE3LehWSFkzF10nQelUuM5DCWFVyXJa6rrQGPyMZbftbgap1l2DtvUaAIbiHuOmhDrWSyllosiePuUwwfE00vtnMxVDE';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            ammount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} />
    );
}

export default StripeCheckoutButton;