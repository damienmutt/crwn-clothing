import React from 'react'
import { connect } from "react-redux"  // Higher order component that lets us modify our component to have access to things related to redux.
import { createStructuredSelector } from "reselect"

import { auth } from "../../firebase/firebase.utils"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { selectCartHidden } from "../../redux/cart/cart.selectors"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

import { ReactComponent as Logo } from "../../assets/crown.svg" // Special syntax to import SVG files as Components

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.styles.jsx";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser?
                <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                :
                <OptionLink to="/signin">
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null: <CartDropdown />
        }
    </HeaderContainer>
);

/** Function that allows us to access the state (root-reducer) as props for Header const.
 * createStructuredSelector automatically send state to selectors.
 */

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);