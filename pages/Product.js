import Products from "../component/Products"
import {useState,useEffect,useContext} from 'react'
import {cartContext} from '../cartContext'


function Product() {
  // using the create context data 

   const { name }=useContext(cartContext)
  //  console.log(name);



  const [products,setProduct]=useState([]);
  
  useEffect(()=>{
    fetch('/product')
    .then((Response)=>{
      // console.log(Response)
      return Response.json();
    }).then(products=>{
      setProduct(products)
      
      
    })

  },[])






  return (
   <>
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-9"> Product {name}</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {
          products.map(Product => <Products key={Product._id} products={Product}/> )
        } 
        {/* <Products/> 
        <Products/>
        <Products/>  {/* // instead of calling again and again add a loop using map // */}
        {/* <Products/>
        <Products/>  */}

        
      </div>

    </div>
   
   
   
   
   </>
  )
}

export default Product