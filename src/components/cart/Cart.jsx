import React, { useState } from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'


function Cart() {
  const { cart } = useSelector(state => state)
  const { order } = useSelector(state => state)
  const oldTotal = cart.reduce((p, c) => {
    return p + c.price
  }, 0)
  
  const [total, setTotal] = useState(oldTotal)

  const grandTotal = order.reduce((p, c) => {
    return p + c.newPrice
  }, 0)

  const handleTotal = () => {
    setTotal(grandTotal)
  }
  const updateCart = (HandleOrder) => {
    // HandleOrder()
    console.log("updateCart hha 11");
  }
  const RunUpdateCart = () => {
    updateCart()
  }



  return (
    <div className=" mt-20">
      <div className="px-8 md:px-16">
        <div className="flax justify-between mb-5 ">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="">
                <thead>
                  <tr className=''>
                    <th className="">Image</th>
                    <th className="">Product</th>
                    <th className="">Price</th>
                    <th className="">Quantity</th>
                    <th className="">Toping 49₹/Each</th>
                    <th className="">Total</th>
                    <th className="">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map(item => <CartItem key={item.id} item={item} handleTotal={handleTotal} updateCart={updateCart} />)
                  }
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap  justify-between pb-12">
          <div className="w-2/3">
            <div className="flex w-full space-x-8 py-4">
              <div className="">
                <button onClick={RunUpdateCart} className="btn btn-primary btn-sm btn-block">
                  Update Cart
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary btn-sm btn-block">
                  Continue Shopping
                </button>
              </div>
            </div>
            <div className="">
              <div className="">
                <label className="text-black text-2xl" htmlFor="coupon">
                  Coupon
                </label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="my-3">
                <input
                  type="text"
                  className=" px-4 py-3 rounded-md w-96"
                  id="coupon"
                  placeholder="Coupon Code" />
              </div>
              <div className="">
                <button className="bg-yellowH btn btn-primary btn-sm ">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="w-72">
            <div className="">
              <div className="">
                <div className="">
                  <div className=" text-right mb-5 border-b-2 ">
                    <h3 className="text-black text-2xl text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className=" text-right">
                    <strong className="text-black">₹{total}</strong>
                  </div>
                </div>
                <div className="flex justify-between mb-5">
                  <div className="">
                    <span className="text-black">Total</span>
                  </div>
                  <div className=" text-right">
                    <strong className="text-black">₹{total}</strong>
                  </div>
                </div>
                <div className="">
                    <button className="btn btn-primary btn-lg py-3 btn-block">  Proceed To Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart
