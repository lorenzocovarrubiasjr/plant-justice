import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.components.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>))
        }
        <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

const mapStateToProps = (state) => ({ 
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);


