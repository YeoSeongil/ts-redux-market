import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { RootState } from "../reducers/_index";
import "./style/Nav.css";

const Nav = () => {
    const history = useHistory();
    const cart = useSelector((state:RootState) => state.cartReducer);

    const HandleOnclick = () => {
        history.push("/cart")
    }

    return (
        <nav className="nav">
            <span className="nav-title" onClick={() => history.push("/")}>Redux-market</span>
            <i onClick={HandleOnclick} className="fas fa-shopping-cart">
                <div className="cart-amount">{cart.length} </div>
            </i>
        </nav>
    );
}

export default Nav;