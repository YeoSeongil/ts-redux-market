import React from "react";
import "./style/ProductItem.css";
import {useDispatch} from 'react-redux';
import {addCart} from '../reducers/_cart';

export type Items = {
    id: number;
    product_name: string;
    price: number;
    product_img: string;
    is_checked: boolean;
}

type ProductItemProps = {
    item:Items;
}

const ProductItem = ({item}:ProductItemProps) => {
    const dispatch = useDispatch();

    const HandleOnclick = () => {
        dispatch(addCart(item))
    }

    return (
        <div className="product-item">
            <img
            className="item-image" 
            alt="product"
            src={item.product_img} />
            <div className="item-name">{item.product_name}</div>
            <div className="item-price">{item.price.toLocaleString()}원</div>
            <button onClick={HandleOnclick} className="add-cart-btn">
                <i className="fas fa-plus"></i>
                장바구니 담기
            </button>
        </div>
    );
}

export default ProductItem;