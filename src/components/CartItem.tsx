import React from "react";
import { Items } from "./ProductItem";
import { useDispatch } from 'react-redux';
import { deleteCart } from '../reducers/_cart';
import "./style/CartItem.css";

type CartItemProps = {
    item:Items
}
export default function CartItem ({item}:CartItemProps) {
    const dispatch = useDispatch();

    const HandleOnclick = () => {
        dispatch(deleteCart(item))
    }
    return (
        <div className="cart-item">
            <img 
            className="cart-item-image"
            alt="cart-item" 
            src={item.product_img}
            />
            <span className="cart-item-name">{item.product_name}</span>
            <span className="cart-item-price">{item.price}</span>
            <i className="fas fa-trash-alt" onClick={HandleOnclick}></i>
        </div>
    );
}