import React from "react"
import { useEffect, useState } from "react"
import { Cart } from "../../components/Cart/Cart"
import { Header } from "../../components/Header/Header"
import { ProductList } from "../../components/ProductList/ProductList"
import { api } from "../../services/Axios"
import { Main } from "./style"

export const HomePage = () => {
  const [products,setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [filtred,setFiltred] = useState([])
  const [search,setSearch] = useState("")

   useEffect(()=>{
      api.get("products")
      .then(res => {
         setProducts(res.data)
      })
      .catch(err => {console.log(err)})
   },[])

   return (
      <Main>
         <Header setSearch={setSearch} products={products} setFiltred={setFiltred}/>
         <div className="Container">
            <ProductList search={search} filtred={filtred} setCart={setCart} cart={cart} products={products}/>
            <Cart cart={cart} setCart={setCart}/>
         </div>
      </Main>
   ) 
}