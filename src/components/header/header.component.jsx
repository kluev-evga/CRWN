import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to="/" className='logo' >
            <Logo />
        </Link>

        <div className='options'>
            <Link to="/shop" className='option'>SHOP</Link>
            <Link to="/contact" className='option'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => signOut(auth)}>SIGN OUT</div>
                    : <Link className='option' to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;