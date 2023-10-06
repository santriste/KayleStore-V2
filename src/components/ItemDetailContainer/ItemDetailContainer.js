import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../Firebase/config'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "products", itemId);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log("No se encontró el producto.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    }

    getProduct();
  }, [itemId])

  return (
    <div>
      {product ? (
        <ItemDetail {...product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  )
}

export default ItemDetailContainer
