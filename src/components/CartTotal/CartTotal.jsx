import React from "react"
import { TotalCart } from "./style"


export const CartTotal = ({cart,setCart}) => {
   return (
      <TotalCart>
         <div>
            <p>Total</p>
            <span>R$ {(cart.reduce((a,b) =>  a + (b.price * b.quantity), 0)).toFixed(2)} </span>
         </div>
         <button onClick={()=> setCart([])} type="button">Remover todos</button>
      </TotalCart>
   )
}