import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import "./style/ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch("/data/productList.json")
        .then(res=>res.json())
        .then(res=>setProducts(res.productList))
    },[])

    const itemList = products.map(item => {
        return <ProductItem item={item}></ProductItem>
    })

    return (
        <section className="product-list">
            <h2 className="product-list-title">상품 목록</h2>
            <div className="product-item-container">
                {itemList}
            </div>
        </section>
    );
}

export default ProductList;