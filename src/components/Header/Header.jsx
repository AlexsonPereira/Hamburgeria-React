import React from "react"
import { InputSearch } from "../InputSearch/InputSearch"
import { Logo } from "../Logo/Logo"
import { HeaderHome } from "./style"

export const Header = ({setSearch}) => {
   return (
      <HeaderHome>
         <div className="container">
            <Logo/>
            <InputSearch setSearch={setSearch}/>
         </div>
      </HeaderHome> 
   )   
}