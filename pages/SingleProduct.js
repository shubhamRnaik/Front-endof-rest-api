import {useState,useEffect} from 'react'
import { useParams,useNavigate} from 'react-router-dom'



const SingleProduct=()=>{

const[product , setproduct] = useState({})
const params = useParams()
const Navigate = useNavigate();
// console.log(params._id);

useEffect(()=>{
    fetch(`/product/${params._id}`)
    .then((Response)=>{
    
      return Response.json();
    }).then(products=>{
      setproduct(products)
  })

  },[params._id])




  return (
    <>
    <div className='container mx-auto mt-12 mt-12'>
        <button className='mb-12 font-bold'onClick={()=>{Navigate(-1)}}> Back</button>
            <div className=' flex '>
                <div className=''><img src={product.image} alt="pizzaday" /></div>
                <div className='ml-16'> 
                    <h6 className='text-xl font-bold'><strong>{product.name}</strong></h6>
                    <size className="text-md text-center">{product.size}</size>
                    <div>
                        <span className=' font-bold my-3'>{product.price}</span>
                        <button className='rounded-full px-8 py-1 bg-yellow-400 mt-4 ml-3'>add to cart</button>
                    </div>
                </div>

            </div>
    </div>
 
    </>
  )
}

export default SingleProduct