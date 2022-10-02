import React, { useState } from "react"
import { BtnDefault, InputDefault, SearchHeader } from "./style"

export const InputSearch = ({setSearch}) => {
   const [searchInput,setSearchInput] = useState("")
   return (
      <SearchHeader>
         <InputDefault onChange={(e)=>{setSearchInput(e.target.value)}} placeholder="Digitar Pesquisa" type="text"/>
         <BtnDefault onClick={()=> {setSearch(searchInput)}} type="button">Pesquisar</BtnDefault>
      </SearchHeader>
   )
}