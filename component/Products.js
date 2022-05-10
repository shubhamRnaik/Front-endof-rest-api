import { Link } from "react-router-dom";
import { cartContext } from "../cartContext";
import {useContext, useState} from 'react'



function Products(props) {
   
  const {cart ,setcart} = useContext(cartContext)
  const addToCart=(event ,products)=>{
    event.preventDefault();
    let _cart = {...cart}         // now we need to modify cart using clone so we dont make changes in main cart details
  
    if(!_cart.items){
      _cart.items = {}
    }
    if(_cart.items[products._id]){
      _cart.items[products._id] = _cart.items[products._id] + 1
    }
    else{
      _cart.items[products._id] = 1
    }
    if(! _cart.totalItems){
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1


    setcart(_cart)
    setisAdding(true)

    setTimeout(() => {
      setisAdding(false)
    }, 1000);
  }
// console.log(props);
  const {products,price,size}=props

  const[isAdding , setisAdding]= useState(false)


  return (
    <>
   <Link to={`/product/${products._id}`}>
   <div>
          <img src={products.image} alt="" />
          <div className="text-center">
            <h6 className="text-lg font-bold py-4  ">{products.name}</h6>
          <span className="bg-gray-200 py-1 rounded-full px-4 "> {products.size}</span>
          </div>
          <div className="py-2 flex justify-between items-center">
            <span className="font-bold">${products.price}</span>
            <button disabled = { isAdding  } onClick={(event)=>{ addToCart(event,products)}} className={`${isAdding ? "bg-green-500" :"bg-orange-400"} rounded-full py-2 px-3 font-bold outline-none`}>ADD{isAdding ? 'ED' :''}</button>
          </div>
         
          
        </div>
   </Link>
    
    
    </>
  )
}

export default Products