import './ItemCount.css';
import React ,{useState} from 'react';

const ItemCount = ({ initial, stock, getData }) => {
  
  
  const [count, setcount] = useState(initial)
  
  const itemPlus = () => {
    if (count >= 0 && count <= stock-1) {
      setcount(count + 1)
    }
  }
  const itemLess = () => {
    if (count >= 1 && count <= stock) {
      setcount(count-1)
    }
  }
 
  return (
    <div onClick={getData(count)} className="Container">
      <button  type="submit" id="btnplus" onClick={itemLess}>-</button>
      <div id="display">{count}</div>
      <button type="submit" id="btnsubstract" onClick={itemPlus}>+</button>
    </div>
  );
  }
  
export default ItemCount;
