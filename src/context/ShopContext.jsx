import { createContext, useState } from "react"
import { Products } from "../Product";

export const ShopContext = createContext();

export const ShopContextProvider = ({children}) => {


    const getDefaultCart = () =>{
        const cart = {}
        for (let i =1; i< Products.length +1 ; i++ ){
              cart[i] = 0
        }
        return cart
    }

    
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalAmount = () => {
      let totalAmount = 0
      // looping through an object.
      for (const item in cartItems) {
          if(cartItems[item] > 0){
              let itemInfo = Products.find((product )=> product.id === Number(item))
              totalAmount += itemInfo.price * cartItems[item]
          }
      }
      return totalAmount
    }



    const addToCart = (itemId) => {
        setCartItems((prev)=> ({...prev , [itemId]: prev[itemId] +1 })  )
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev , [itemId]: prev[itemId] -1 })  )
    }


    const contextValue = {
      cartItems,
      addToCart,
      removeFromCart,
      getTotalAmount}

      console.log(cartItems)
    return (

      <ShopContext.Provider  value={contextValue} >


        {children}


      </ShopContext.Provider>




    )
}