import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';


const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionDiv onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionDiv>
                        : <OptionLink to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>

            {hidden && <CartDropdown />}

        </HeaderContainer>
    );
}

export default Header;