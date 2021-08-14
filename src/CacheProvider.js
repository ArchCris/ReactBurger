import React, { useState } from "react";
import cartContext from "./context/cartContext";

export default function CacheProvider({ defaultValue = [], children }) {
    const [comprados, setComprados] = useState(defaultValue);

    function addProduct(product){
        if (comprados !== "") {
          comprados.forEach((comprado,id) => {
            if (comprado.productName === product.productName) {
              comprados.splice(id,1)
              product.productAmount += comprado.productAmount 
              setComprados([...comprados,product])
            }
          });
        }
        setComprados([...comprados,product])
    }
    
  function deleteProduct(productoaEliminar) {
  
    for (let i=0; i < comprados.length; i++){
      if (comprados[i].productName === productoaEliminar) {
        comprados.splice(i,1)
      }
    }
    console.log("producto eliminado")
    setComprados([...comprados])
    }

    return (
        <cartContext.Provider value={{comprados, setComprados, addProduct, deleteProduct}}>
            {children}
        </cartContext.Provider>
    )
}