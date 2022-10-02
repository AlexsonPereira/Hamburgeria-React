import React from "react"
import { Product } from "../Product/Product"
import { ListProducts } from "./style"


export const ProductList = ({products,setCart,cart,filtred,search}) => {
   return (
      <>
      <ListProducts>
         { filtred.length === 0 ?

          products.map(e => <Product cart={cart} setCart={setCart}  key={e.id} image={e.img} name={e.name} category={e.category} price={e.price}/>)
          :
          filtred.map(e => <Product cart={cart} setCart={setCart}  key={e.id} image={e.img} name={e.name} category={e.category} price={e.price}/>)
         }
      </ListProducts>
      </>
   )
}