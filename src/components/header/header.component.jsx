import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import './header.styles.scss';
import logo from '../../assets/leaf-vector.png';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className="logo-container" to='/'>
            <img src={logo} alt='Logo'/>
        </Link>
        
        <div className='options'>
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                MISSION
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                <Link className="option" to='/signIn'>
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null  : <CartDropdown />
        }
    </div>

);

const mapStateToProps = ({user: { currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);