import React, { useState } from 'react'
import img from '../assets/speciality-img1.png'
import { useDispatch } from 'react-redux';
import { add } from '../store/cart/cartSlice';

function CartA({ pizza }) {
  const dispatch = useDispatch()
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { name, image, description, spicy, price } = pizza
  // const desable

  const handleAdd = () => {
    setIsButtonDisabled(true);
    dispatch(add(pizza))
  }



  return (
    <>
      <div id='products' className="max-w-xs rounded-md shadow-md bg-gray-50  ">
        <div className="p-8 bg-white">
          <img src={image} alt="" className=" z-10 object-cover object-center h-full rounded-t-md transition-all" />
        </div>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className='text-xl'>₹ {price}</p>
              <p>Chilli : {spicy}</p>
            </div>
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="h-16 overflow-y-scroll">{description}</p>
          </div>
          <button disabled={isButtonDisabled} onClick={handleAdd} type="button" className={`flex uppercase items-center justify-center w-full p-3 tracking-wide rounded-md ${isButtonDisabled ? 'btn-disabled cursor-not-allowed bg-slate-300' : 'btn-primary'
            }`}>Add to cart</button>
        </div>
      </div>

    </>
  )
}

export default CartA
