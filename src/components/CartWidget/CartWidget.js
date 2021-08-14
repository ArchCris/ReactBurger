import './CartWidget.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import cartContext from "../../context/cartContext";


function CartWidget() {

  const { comprados } = useContext(cartContext)
  let total = 0
  if (comprados !== "") {
    comprados.map((compra) => (
      total += compra.productAmount
    ))
  }

  return (
    <div className="cartWidget">
      <NavLink className="btnBuy" to={`/cart`}><FontAwesomeIcon id="icon" icon={faShoppingCart} />
        {comprados<1?<p></p>:<p className="numberCompras">{total}</p>}
      </NavLink>
    </div>
  );
};

export default CartWidget;

