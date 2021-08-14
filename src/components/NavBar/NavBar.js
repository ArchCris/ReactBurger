import './NavBar.css';
import { NavLink } from "react-router-dom"


import CartWidget from '../CartWidget/CartWidget.js';

function NavBar() {
  return (
    <header>
      <div className="logoSection">
        <NavLink activeClassName="selected" exact to="/"><img src="./pumperLogo.png" alt='Logo Pumper'></img></NavLink>
      </div>
      <nav>
            <ul>
                <li><NavLink activeClassName="selected" exact to={`/`}>PRODUCTS</NavLink></li>
                <li><NavLink activeClassName="selected" exact to="/aboutus">ABOUT US</NavLink></li>
                <li><NavLink activeClassName="selected" exact to="/contact">CONTACT</NavLink></li>
            </ul>
      </nav>
        <CartWidget/>
    </header>
  );
}

export default NavBar;
