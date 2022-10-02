import React from "react"
import { CartProduct } from "../CartProduct/CartProduct"
import { CartTotal } from "../CartTotal/CartTotal"
import { CartStyle } from "./style"


export const Cart = ({cart,setCart}) => {
   return (
      <CartStyle>
         <div>
            <div className="CartHeader">
               <h3>Carrinho de compras</h3>  
            </div>
            {cart.length === 0 ? 
            <div className="EmptyCart">
               <h3>Sua sacola está vazia</h3>
               <span>Adicione itens</span>
            </div>
            :           
            <>
            <div>
               <ul>  
                 {cart.map(e => <CartProduct setCart={setCart} cart={cart} key={e.id} img={e.img} name={e.name} category={e.category} quantity={e.quantity} /> )}
               </ul>
            </div>
            <CartTotal cart={cart} setCart={setCart}/>
            </>
         }
      </div>
      </CartStyle>
   )
}