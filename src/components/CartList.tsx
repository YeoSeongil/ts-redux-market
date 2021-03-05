import React from "react";
import CartItem from "./CartItem";
import "./style/CartList.css";
import { useSelector} from 'react-redux';
import { RootState } from '../reducers/_index';
import { Items } from "./ProductItem";

export default function CartList () {
    const cart = useSelector((state:RootState)=>state.cartReducer);

    const cartItem = cart.length >= 1 ? cart.map((item:Items) => {
        return <CartItem item={item}/>
    }) : <div className="cart-empty">장바구니가 비어 있습니다.</div>
    return (
        <section className="cart-list">
            <h2 className="cart-list-title">장바구니</h2>
            {cartItem}
        </section>
    );
}