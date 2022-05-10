import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Navigation from './component/Navigation'
import Product from "./pages/Product"
import SingleProduct  from './pages/SingleProduct'
import {cartContext}  from './cartContext'
import { useEffect, useState } from 'react'
import Cart  from './pages/Cart'


const App = () => {

  const[cart,setcart] = useState({})
  // store data in local storage

  // fetch from local storage 

  useEffect(()=>{
   const cart =  window.localStorage.getItem('cart')
    // logic for cart data
   
    setcart( JSON.parse(cart))
    

  },[])


  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart))
     // we only store strings in local storage and cart is object so convert & store 
  },[cart])

 

  return (
   <>
   <Router>

    <cartContext.Provider value={{cart:cart,setcart }}>
    <Navigation />
    <Routes>
    <Route path="#" element={<Navigation />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/product" element ={<Product />}/>
    <Route path='/product/:_id'  element={<SingleProduct />}/>
    <Route path='/Cart'  element={<Cart />}/>
    </Routes>

    </cartContext.Provider>

  

   </Router>
    
    </>
  )
}

export default App