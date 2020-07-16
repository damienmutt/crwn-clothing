import React from 'react'
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg" // Special syntax to import SVG files as Components
import { connect } from "react-redux"  // Higher order component that lets us modify our component to have access to things related to redux.
 
import { auth } from "../../firebase/firebase.utils"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

import "./header.styles.scss"

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null: <CartDropdown />
        }
    </div>
);

// Function that allows us to access the state (root-reducer) as props for Header const.
const mapStateToProps = ({ user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);