import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../Firebase/config'


const ItemDetailContainer= () => {
    const [products, setProducts] = useState ([])

    const {itemId} = useParams ()

    useEffect (() => {

        const docRef = doc(db, "products", itemId);
        getDoc(docRef)
        .then((resp) => {
            setProducts(
                { ...resp.data(), id: resp.id });
        })
        
    }, )

    return (
        <div>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailContainer