
import { Link } from 'react-router-dom'
import React from 'react'
import {ShoppingCart} from 'phosphor-react'

function Navbar() {
  return (

    <div className='p-5 bg-black text-white   ' >
        
        <div  className='flex justify-end items-center sm:space-x-6  space-x-3 sm:mr-10 mr-2 text-2xl sm:text-3xl ' >



        <Link  to="/"  className='hover:text-gray-400'  > Shop   </Link>
        <Link  to="/cart"   className='hover:text-gray-400' > <ShoppingCart   size={40} /> </Link>

        </div>



    </div>
  )
}

export default Navbar