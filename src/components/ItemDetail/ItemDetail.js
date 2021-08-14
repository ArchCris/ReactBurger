import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import cartContext from "../../context/cartContext";

const ItemDetail = ({ picture, name, price, description, stock, id }) => {
  const {addProduct} = useContext(cartContext)
  const [count, setcount] = useState(0)
 
  const getCount = (e) => { 
    setcount(e)
  }

  const addedProduct = {
    productName: name,
    productAmount: count,
    productId: id,
    productPrice:price
  }

  return (
      <div className="contenedorItemdetail">
        <p id="nameDetail">{name}</p>
        <img src={picture} alt="hamburgesa"></img>
      <p id="precio">$ {price}</p>
      <ItemCount getData={getCount} initial={0} stock={stock} />
        <div className="btnDiv">
        {count < 1 ? <p></p> : <NavLink onClick={()=>addProduct(addedProduct)} className="btnBuy" to={`/cart`}>ADD</NavLink> }
        </div>
        <p>{description}</p>
      </div>
  
  );
}
export default ItemDetail;