
import './ItemListContainer.css';



import ProductCategory from '../ProductCategory/ProductCategory';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const productClass = useParams()
  
  return (
    <div className="productContainer">
      <ProductCategory/>
      <ItemList category={productClass} />
      <Footer/>
    </div>
  );
}
export default ItemListContainer;

