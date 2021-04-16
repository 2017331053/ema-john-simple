import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products, setProducts] = useState(first10)

    const[cart, setCart] = useState([]);

    const  handleAddproduct =(product) =>{
        console.log('product added',product);
        const newCart = [...cart, product];
        setCart (newCart);
    }
    
    console.log( fakeData);
    return (
        <div className="shop-container">
            <div className="product-container">
            <h1> This is Shop</h1>
            <h3>{products.length}</h3>
                {
                    products.map(pd =><Product handleAddproduct = {handleAddproduct} product={pd}></Product>)
                }
          
            </div>
            
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;