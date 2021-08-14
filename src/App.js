
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import Cart from './components/Cart/Cart';

import { BrowserRouter, Switch, Route } from "react-router-dom"
import CacheProvider from './CacheProvider';

const App = () => {
  
  return (
  <CacheProvider>
    <BrowserRouter>
      <div className="conteinerGral">
        <NavBar />
          <Switch>
            <Route path="/" exact>
              <ItemListContainer/>
            </Route>
            <Route path="/category/:id" exact>
              <ItemListContainer/>
            </Route>
            <Route path="/item/:id" exact>
              <ItemDetailContainer/>
            </Route>
            <Route path="/contact" exact>
              <Contact/>
            </Route>
            <Route path="/aboutus" exact>
              <Aboutus/>
            </Route>
            <Route path="/cart" exact>
              <Cart/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CacheProvider>
  );
}

export default App;
