import React from "react"
import { CardCart } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartProduct = ({img,name,category,quantity,cart,setCart}) => {
   const notifyTest = () => toast.success('Removido com sucesso', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   const removeItenCart = () => {
      const filtro = cart.findIndex(e => e.name === name)
      if(cart[filtro].quantity !== 1){
         cart[filtro].quantity = cart[filtro].quantity - 1
         setCart([...cart])
      }else{
         const filtred = cart.filter(e => e.name !== name)
         setCart([...filtred])
         notifyTest()
      }
   }

   return (
      <>
      <CardCart>
         <div>
            <div>
               <img src={img} alt={name} />
            </div>
            <div>
               <h4>{name}</h4>
               <p>{category}</p>
            </div>
         </div>
         <span>{quantity}</span>  
         <button onClick={()=>{removeItenCart()}}>Remover</button>
      </CardCart>
         <ToastContainer/>
      </>

   )
}