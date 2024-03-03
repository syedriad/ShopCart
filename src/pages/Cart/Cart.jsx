import React, { useContext } from 'react'
import { Products } from '../../Product'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'




function Cart() {
  const {cartItems, getTotalAmount} = useContext(ShopContext)
  const finalAmount = getTotalAmount()

  const navigate = useNavigate()

  return (
    <div>

        <div>
            <h1 className='text-center text-4xl font-mono mt-10 font-semibold'  >YOUR CART ITEMS</h1>
        </div>

        <div className='flex justify-center items-center flex-col' >
          {Products.map((prod)=>{
              if(cartItems[prod.id] !== 0 ){
                return <CartItem  name = {prod.productName} price = {prod.price} image = {prod.productImage} id = {prod.id} />
              }
          })}
        </div>
          {finalAmount> 0? (
        <div  className='flex justify-center items-center space-x-4 mt-4 mb-8 ' >
          <p className='text-2xl mb-4 mt-4 ' >
            
            Total Amount: ${finalAmount}</p>
          <button  onClick={()=> navigate('/')}  className='px-2 py-1 rounded border-lg font-mono font-semibold hover:bg-red-800 text-lg bg-red-500 text-white ' >Continue Shopping</button>
          <button    className='px-2 py-1 rounded border-lg font-mono font-semibold hover:bg-red-800 text-lg bg-red-500 text-white ' >CheckOut</button>
          
        </div>
          ) : (<h1  className='text-center text-4xl font-mono mt-10 font-semibold' > YOUR CART IS EMPTY </h1>)}
    </div>
  )
}

export default Cart