import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/leaf-vector.png';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_CsV23w1Uz3oJFZ7tHsCRQUOF00WpOSHmvP'
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Plant Justice'
        billingAddress
        shippingAddress
        image={logo}
        description={`Total: $${price}`}
        alipay={true}
        bitcoin={true} 
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;