import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'


function ProductList( {name , image , price , id} ) {
  
  const {addToCart , cartItems, removeFromCart} = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  
  return (
    <div className='  p-4 h-auto hover:shadow-md hover:transition duration-300 ease-in cursor-pointer m-10 flex  justify-center flex-col ' >
        
        <div  style={{backgroundImage : `url(${image})` }}  className='w-64 h-60 bg-no-repeat bg-center bg-cover ' >  </div>
        
        <h1 className='sm:text-2xl text-lg  font-semibold mt-2 text-center' > {name} </h1>
        
        <p  className=' mt-2 text-md font-mono font-medium text-center '  > ${price} </p>
        
        
        <button className='rounded-full px-2 py-1 bg-ransparent border-black border-2 text-black hover:bg-black hover:text-white cursor-pointer  ' 
        
        onClick={()=> addToCart(id)}
        >  Add to Cart {cartItemAmount > 0 && <spam>({cartItemAmount})</spam>} </button>
    </div>
  )
}

export default ProductList 