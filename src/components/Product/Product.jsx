import React from "react"
import { BtnDefault } from "../InputSearch/style"
import { CardIten } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = ({image,name,category,price,setCart,cart}) => {
   const notify = () => toast.success('Adicionado com sucesso', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

   const addToCart = () => {
      const filtro = cart.findIndex(e => e.name === name)
      if(filtro === (-1)){
         const product = {
            img : image,
            name : name,
            category : category,
            price: price,
            quantity: 1,
         }
         
         setCart([...cart,product])

      }else{   
         cart[filtro].quantity = cart[filtro].quantity + 1
         setCart([...cart])
         notify()

      }
   }

   return (
      <CardIten>
         <div className="BoxImage">
            <img src={`${image}`} alt={name} />
         </div>
         <div className="BoxText">
            <h3>{name}</h3>
            <p>{category}</p>
            <span>R${price}</span>
            <BtnDefault onClick={() => {addToCart()}} type="button" >Adicionar</BtnDefault>
         </div>
         <ToastContainer/>
      </CardIten>
   )
}