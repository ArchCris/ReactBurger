import './Item.css';


import { NavLink } from 'react-router-dom';


const Item = ({id,picture,name,price}) => {


return (
  <div className="contenedorItem">
    <img src={picture}  alt="hamburgesa"></img>
    <p className="nameItem">{name}</p>
    <p id="precio">$ {price}</p>
    <NavLink to={`/item/${id}`}>DETAILS</NavLink>
  </div>
);
 
}
export default Item;

