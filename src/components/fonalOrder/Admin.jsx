import React from 'react'
import Order from './Order'
import { useSelector } from 'react-redux'

function Admin() {
  const {order} = useSelector(state => state )
  
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-3xl font-semibold leading-tight w-full text-center">admin panel</h2>
      <h2 className="mb-4 text-xl leading-tight ">Order value : {order.length === 0 ? '0' : order[1].newPrice}</h2>
      <div className="overflow-x-auto"> 
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <colgroup>
          </colgroup>
          <thead>
            <tr className="bg-gray-300 text-xl">
              <th className="p-3">QUIANTITY</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Topings</th>
            </tr>
          </thead>
          {
            order.map(order=><Order order={order}/>)
          }
        </table>
      </div>
    </div>
  )
}

export default Admin
