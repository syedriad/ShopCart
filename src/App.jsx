import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop/Shop"
import Cart from "./pages/Cart/Cart"
import { ShopContextProvider } from "./context/ShopContext"

function App() {

  return (
    
    <div>

      <ShopContextProvider>
        <Router>
          <Navbar/>
            <Routes>

                  <Route  path="/" element = {<Shop/>}   ></Route>
                  <Route  path="/cart" element= {<Cart/>}   ></Route>


            </Routes>


        </Router>
        </ShopContextProvider>
    </div> 

  )
}

export default App
