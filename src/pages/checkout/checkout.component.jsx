import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-checkout/stripe-checkout.component';
import SquareCheckoutButton from '../../components/square-checkout/square-checkout.component';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.length ?
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                : <div> 
                <h3>Your Cart Is Empty</h3>
                <h4>Add Items Now</h4></div>
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
        <div className='checkout-form'>
            <StripeCheckoutButton price={total} />
            <SquareCheckoutButton price={total} />
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);