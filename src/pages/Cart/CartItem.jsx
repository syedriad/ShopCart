import React, { useContext } from 'react'
import {ShopContext } from "../../context/ShopContext"

export function CartItem({name , image , price , id}) {
  
  const {cartItems, addToCart,removeFromCart} = useContext(ShopContext)

  
  return (
    <div className='  p-4 h-auto  shadow-xl p-4  hover:shadow-2xl hover:transition duration-300 ease-in cursor-pointer m-10 flex  justify-center flex-col border-2 rounded-xl ' >

    <div  style={{backgroundImage : `url(${image})` }}  className='w-64 h-60 bg-no-repeat bg-center bg-cover ' >  </div>
        
        <h1 className='sm:text-2xl text-lg  font-semibold mt-2 text-center' > {name} </h1>
        
        <p  className=' mt-2 text-md font-mono font-medium text-center '  > ${price} </p>

        <div className='flex justify-center mt-4 ' >

          <button className='bg-blue-400 px-1 ' onClick={()=> addToCart(id)} > + </button>
          <input value={cartItems[id]}  className='border-2 w-12 text-center' />
          <button className='bg-blue-400 px-2 '  onClick={()=> removeFromCart(id)} > - </button>
        
        
        </div>
    </div>
  )
}

export default CartItem