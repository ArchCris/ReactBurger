import './ItemList.css';
import Item from '../Item/Item';
import { useState, useEffect } from 'react/cjs/react.development';
import { getFirestore } from '../../factory/firebase';


const ItemList = ({ category }) => {
  
  const [products, setproducts] = useState([])
  
 
  useEffect(() => {


    const db = getFirestore();
    const itemCollection = db.collection('items');
    itemCollection
      .get()
      .then(querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log('no results');
          return;
        }

        setproducts(querySnapshot.docs.map(doc => doc.data()));
        

        const productosBase = querySnapshot.docs.map(doc => doc.data())
        const idBase = querySnapshot.docs.map(doc => doc.id)

        for (let i = 0; i < productosBase.length; i++){
          Object.defineProperty(productosBase[i], "id", {value:idBase[i]})
        }

        setproducts(productosBase)
        
      })
      .catch(error => {
        console.log(error);
      });

  }, []);


  return (
    <div className="itemListConteiner">
      
      {products.map((producto, id) => {
      if (category.id === producto.type) {
        return (
          <Item id={producto.id} key={id} picture={producto.pictureUrl} name={producto.title}
          price={producto.price} description={producto.description} stock={producto.stock} />
        )
      } else if(category.id === undefined) {
        return (
          <Item id={producto.id} key={id} picture={producto.pictureUrl} name={producto.title}
          price={producto.price} description={producto.description} stock={producto.stock} />
        )
      }   
    }
    )}
    </div>
);
}
export default ItemList;





