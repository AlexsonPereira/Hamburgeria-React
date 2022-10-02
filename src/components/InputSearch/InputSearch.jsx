import React, { useState } from "react"
import { BtnDefault, InputDefault, SearchHeader } from "./style"

export const InputSearch = ({setFiltred,products,setSearch}) => {
   const [text,setText] = useState("")
   const renderSearch = () => {
      const itensFiltred = products.filter(e => (e.name.toLowerCase()).includes(text.toLowerCase()) || (e.category.toLowerCase()).includes(text.toLowerCase()))
      setFiltred(itensFiltred)
      setSearch(text)
   }

   return (
      <SearchHeader>
         <InputDefault onChange={(e)=>{setText(e.target.value)}} placeholder="Digitar Pesquisa" type="text"/>
         <BtnDefault onClick={()=> {renderSearch()}} type="button">Pesquisar</BtnDefault>
      </SearchHeader>
   )
}