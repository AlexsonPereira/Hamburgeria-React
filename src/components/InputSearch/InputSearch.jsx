import React, { useState } from "react"
import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { toast, ToastContainer } from "react-toastify";
import { BtnDefault, InputDefault, SearchHeader } from "./style"
export const InputSearch = ({setFiltred,products}) => {

   
   const notify = () => toast.error('Produto não encontrado', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   
   const [text,setText] = useState("")
   const renderSearch = () => {
      console.log(typeof text)
      
         const itensFiltred = products.filter(e => (e.name.toLowerCase()).includes(text.toLowerCase()) || (e.category.toLowerCase()).includes(text.toLowerCase()))
         if(itensFiltred.length === 0){
            notify()
         }
         setFiltred(itensFiltred)

         if(text === " "){
            setFiltred([])
         }
   }

   useEffect(()=>{
      if(text === " ")
      (setFiltred([]))()
      
   },[text])

   const clearInput = () => {
      setText("")
      setFiltred([])

   }

   return (
      <SearchHeader>
         {text !== "" ? (<AiOutlineCloseCircle className="BtnClose" onClick={()=>{clearInput()}}/>) : <></>}
         <InputDefault onChange={(e)=>{setText(e.target.value);renderSearch()}} value={text} placeholder="Digitar Pesquisa" type="text"/>
         <BtnDefault onClick={()=> {renderSearch()}} type="button">Pesquisar</BtnDefault>
         <ToastContainer/>
      </SearchHeader>
   )
}