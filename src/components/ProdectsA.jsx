import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartA from './CartA'
import { fatchPizzas } from '../store/product/productSlice'

function ProdectsA() {
  const { pizzas } = useSelector(state => state.pizza)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fatchPizzas())
  }, [])
  return (
    <div className='mb-24' >
      <h1 className='text-center text-6xl bg-slate-100 mb-16'>CHOOSE YOUR <br /> DELICIOUS PIZZA!</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 place-items-center">
        {
          pizzas.map(item => <CartA key={item.id} pizza={item} />)
        }
      </div>
    </div>
  )
}

export default ProdectsA
