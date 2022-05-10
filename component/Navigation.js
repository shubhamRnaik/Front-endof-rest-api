import { Link } from "react-router-dom"
import{ useContext} from 'react'
import { cartContext } from "../cartContext"

function Navigation() {

    const cartStyle={
        background:"#f59e0d",
        display:"flex",
        borderRadius:"50px",
        padding:"12px"
    }

    const {cart} = useContext(cartContext)
  return (
        <>
        <nav className="container mx-auto items-center flex justify-between mt-2">
           <Link to={'#'}>  <img src="/images/logo.png"/></Link>
            <ul className="flex items-center">
                <Link to={'/Home'}> <li>Home</li></Link>
                <Link className="ml-2" to={'/product'}> <li>Product</li></Link>
                <Link to={'/Cart'}>
                    <div  className="ml-2" style={cartStyle}>
                     <span>{cart.totalItems}</span> <img src="/images/cart.png" />
                    </div>
                    </Link>
                
            </ul>




        </nav>
        
        
        
        
        </>


  )
}

export default Navigation