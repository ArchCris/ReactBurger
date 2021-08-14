import './ItemDetailContainer.css';
import { useState,useEffect } from 'react/cjs/react.development';

import ItemDetail from '../ItemDetail/ItemDetail';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../factory/firebase';

const ItemDetailContainer = () => {

  const [seleccionado, setSeleccionado] = useState([{}])

  const productId = useParams()
  
  useEffect(() => {

    const db = getFirestore();
    const itemCollection = db.collection('items');
    const item = itemCollection.doc(productId.id);
    item
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.exists) {
          console.log('no results');
          return;
        }
        setSeleccionado([{id:querySnapshot.id,...querySnapshot.data()}])
      })
      .catch(error => {
        console.log(error);
      });

  }, [productId]);
  
  return (
    <div className="contenedorItemDetailConteiner">
          <ItemDetail key={seleccionado[0].id} id={seleccionado[0].id} picture={seleccionado[0].pictureUrl} name={seleccionado[0].title}
          price={seleccionado[0].price} description={seleccionado[0].description} stock={seleccionado[0].stock} />
      <Footer/>
  </div>
  );
}
export default ItemDetailContainer;


