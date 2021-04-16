import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);

    const {img, name,seller,price,stock} =props.product;
    return (
        <div className="product">
            <div>
                <img src = {img}></img>
            </div>
            <div className="product-name"> <h4>{name}</h4>
            <br/>
            
            <p><small>by:{seller}</small></p><br/>
            <p>${price}</p><br/>
            <p><small>only {stock} left in stock -Order soon</small></p>
            <button
             className="button"
            //  onClick= {props.handleAddproduct(props.product) }
            
             onClick= {() =>props.handleAddproduct(props.product) }
            
            >Add to Cart</button>
            
            </div>



     {/* <h3> This is Product</h3>  */}
     
  
        </div>
    );
};

export default Product;