import Product from "./Product"

const Home = () => {
  return (
    <>
    <div className="Hero py-16">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <h6 className="text-lg font-bold"><em>Are you Hungry ?</em></h6>
          <h1 className="text-3xl md:text-6xl font-bold">Don't Wait</h1>
          <button className=" px-7 bg-yellow-500 rounded-full py-1 mt-2 hover:bg-yellow-600 text-white outline-none">Order Now</button>
        </div>
        <div className="w-1/2">
          <img className="w-4/5" src="images/pizza.png" alt="pizza"/>
        </div>

        
      </div>
    </div>
    <div className="pb-12">
      <Product />
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Home