import React from 'react'
import {NavLink} from "react-router-dom"


import './ProductCategory.css';

const ProductCategory = () => {
    return (
        <div className="categoryConteiner">
            <ul>
                <li><NavLink activeClassName="selected" exact to="/category/burger">BURGER</NavLink></li>
                <li><NavLink activeClassName="selected" exact to="/category/salad">SALADS</NavLink></li>
                <li><NavLink activeClassName="selected" exact to="/category/snack">SNACKS</NavLink></li>
            </ul>
        </div>
    )
}

export default ProductCategory
