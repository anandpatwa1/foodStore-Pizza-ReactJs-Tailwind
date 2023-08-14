import React from 'react'

function Order({order}) {
    const {name , quantity , price , Topings , description} = order 
    console.log(order )
  return (
    <tbody className="border-b bg-gray-50 border-gray-300">
    <tr>
      <td className="px-3 text-2xl font-medium text-gray-600">{quantity}</td>
      <td className="px-3 py-2">
        <p>{name}</p>
      </td>
      <td className="px-3 py-2">
        <p>{price}</p>
        {/* <p className="text-gray-600">Spirit Media</p> */}
      </td>
      <td className="px-3 py-2">
        <p>{Topings.BlackOlives == true ? 'BlackOlives' : ''}</p>
        <p>{Topings.Chicken == true ? 'Chicken' : ''}</p>
        <p>{Topings.Mushroom == true ? 'Mushroom' : ''}</p>
        <p>{Topings.Mushroom == true ? 'Mushroom' : ''}</p>
        <p>{Topings.Paneer == true ? 'Paneer' : ''}</p>
        <p>{Topings.Pepperoni == true ? 'Pepperoni' : ''}</p>
        <p>{Topings.Sausage == true ? 'Sausage' : ''}</p>
        <p>{Topings.cheese == true ? 'cheese' : ''}</p>
      </td>
    
      
    </tr>
  </tbody>
  )
}

export default Order
