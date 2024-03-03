import React from 'react'
import {Products} from "../../Product"
import ProductList from '../../components/ProductList'

function Shop() {
  return (
    
    <div  className=' p-4 ' >

        <div >
            <h1 className='sm:text-6xl text-2xl font-bold font-mono mt-2  text-center ' > RiadTech Shop </h1>
        </div>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center sm:gap-x-3 mx-auto w-full p-8  mt-16  ' >
              {Products.map((obj, key)=> {
              return <ProductList  name = {obj.productName} image = {obj.productImage} price = {obj.price} id= {obj.id}  />   })}
        </div>




    </div>
  )
}

export default Shop