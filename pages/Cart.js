import React from 'react'

function Cart() {
  return (

    <div className=' container mx-auto  lg:w-1/2 w-ful pb-24'>
      <h1 className=' font-bold my-12'>Cart_Items</h1>
      <ul>
        <li className='mb-12'> 
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img  className='h-12' src="/images/peproni.png" alt="peproniimage" />
              <span className='ml-4 w-48 font-bold'>Peproni Pizza </span>
            </div>

            <div>
              <button className='bg-yellow-500  rounded-full  px-4 py-2  leading-none  outline-none'> - </button>
              <b className='px-3'>2</b>
              <button className='bg-yellow-500  rounded-full  px-4 py-2 leading-none outline-none'> +  </button>
            </div>

            <div>
            <b>₹ 500</b>
            </div>
            
            <div >
              <button className='bg-red-600 px-2 py-1 rounded-full text-white leading-none outline-none'>Delete</button>
            </div>
          </div>
        </li>
        <li className='mb-12'> 
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img  className='h-12' src="/images/peproni.png" alt="peproniimage" />
              <span className='ml-4 w-48 font-bold'>Peproni Pizza </span>
            </div>

            <div>
              <button className='bg-yellow-500  rounded-full  px-4 py-2  leading-none  outline-none'> - </button>
              <b className='px-3'>2</b>
              <button className='bg-yellow-500  rounded-full  px-4 py-2 leading-none outline-none'> +  </button>
            </div>

            <div>
            <b>₹ 500</b>
            </div>
            
            <div >
              <button className='bg-red-600 px-2 py-1 rounded-full text-white leading-none outline-none'>Delete</button>
            </div>
          </div>
        </li>




      </ul>
      <hr className=' my-6'/>

      <div className=' text-right'>
        <b>Grand Total :₹ 2000</b>
      </div>
      <div className=' text-right my-4'>
        <button className=' bg-yellow-400 px-2 py-4 rounded-full outline-none leading-none'>Order Now</button>
      </div>
    </div>

  )
}

export default Cart