import React from "react"
import { InputSearch } from "../InputSearch/InputSearch"
import { Logo } from "../Logo/Logo"
import { HeaderHome } from "./style"

export const Header = ({setFiltred,products,setSearch}) => {
   return (
      <HeaderHome>
         <div className="container">
            <Logo/>
            <InputSearch setSearch={setSearch} products={products} setFiltred={setFiltred}/>
         </div>
      </HeaderHome> 
   )   
}