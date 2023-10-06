import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"

import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/config"




const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams ()

    useEffect(() => {

      const productsRef = collection(db, "products");
      const q = categoryId ? query(productsRef, where("categoria", "==", categoryId)) : productsRef;

      getDocs(q)
        .then((resp) => {

          setProducts(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [categoryId])
    
    
  return (
    <div>
        <ItemList products={products} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer