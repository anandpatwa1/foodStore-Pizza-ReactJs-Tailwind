import React, {  useState } from 'react'
import { finalOrder } from '../../store/order/orderSlice'
import { useDispatch } from 'react-redux'
import { add } from '../../store/cart/cartSlice'

function CartItem({ item , handleTotal , updateCart }) {
    const dispatch = useDispatch()
    const { image, name, price, description } = item

    const [quantity, setQuantity] = useState(1)
    const [Price, setPrice] = useState(price)

    const newQuantity = quantity
    const newPrice = Price * quantity

    const [Topings, setTopings] = useState({

        cheese: false,
        Sausage: false,
        Mushroom: false,
        BlackOlives: false,
        Paneer: false,
        Pepperoni: false,
        Chicken: false
    })
    const handleChange = (e) => {
        setTopings({
            ...Topings,
            [e.target.name]: e.target.value === "on" ? true : false ,

        })
        setPrice(Price + 49)
        //  Topings.cheese === 'true' ? setPrice(Price + 49) : setPrice(Price - 49)
        // if(Topings.cheese === 'true'){setPrice(Price + 49)}else if(Topings.cheese === 'true'){{setPrice(Price - 49)}
    }

    const order = {
        name,
        quantity: newQuantity,
        Topings,
        price,
        newPrice,
        description
    }
     const HandleOrder = () => {
        dispatch(finalOrder(order))
    handleTotal()
    }
    // updateCart(HandleOrder)
    const handleCartTotal = () => {
        handleTotal()
    }
    // const updateCartNew = () => {
    // }
    updateCart()


    return (
        <tr>
            <td className="place-items-center grid p-8 border border-gray-300">
                <img src={image} alt="Image" className="img-fluid " />
            </td>
            <td className="text-center w-36  border border-gray-300 p-4">
                <h2 className="h5 text-black">{name}</h2>
            </td>
            <td className="place-items-center  border border-gray-300 p-4">₹{price}</td>
            <td className='w-40  border border-gray-300 p-4'>
                <div className=" flex-col">
                    <div className="flex justify-between mb-1" style={{ maxWidth: 140 }}>
                        <div className="">
                            <button onClick={() => setQuantity((newQuantity - 1) >= 0 ? (newQuantity - 1) : 0)} className="btn btn-outline-primary rounded-r-md" type="button">−</button>
                        </div>
                        <span className='min-w-max w-12 place-items-center grid bg-white'>{quantity}</span>
                        <div className="">
                            <button onClick={() => setQuantity(newQuantity + 1)} className="btn btn-outline-primary w-12" type="button">+</button>
                        </div>
                    </div>
                </div>
            </td>
            <td className='w-48 border border-gray-300 p-4'>
                <div className="scroll">
                    <div className="flex justify-between pt-1">
                        <div className="">Extra Cheese </div>
                        <input onChange={handleChange} name='cheese' className="p-3 btn-primary w-4 rounded-md bg-yellow" type="checkbox" />
                    </div>
                    <div className="flex justify-between pt-1">
                        <div className="">Mushroom </div>
                        {/* <button className=" btn-primary w-10 rounded-md bg-yellow" type="button">+</button> */}
                        <input onChange={handleChange} name='Mushroom' className="p-3 btn-primary w-4 rounded-md bg-yellow" type="checkbox" />
                    </div>
                    <div className="flex justify-between pt-1">
                        <div className="">Sausage </div>
                        <input onChange={handleChange} name='Sausage' className="p-3 btn-primary w-4 rounded-md bg-yellow" type="checkbox" />
                    </div>
                    <div className="flex justify-between pt-1">
                        <div className="">Black olives </div>
                        <input onChange={handleChange} name='BlackOlives' className="p-3 btn-primary w-4 rounded-md bg-yellow" type="checkbox" />
                    </div>
                    <div className="flex justify-between pt-1">
                        <div className="">Paneer </div>
                        <input onChange={handleChange} name='Paneer' className="p-3 btn-primary w-4 rounded-md bg-yellow" type="checkbox" />
                    </div>
                    <div className="flex justify-between pt-1">
                        <div className="">Pepperoni</div>
                        <input onChange={handleChange} name='Pepperoni' className="p-3 btn-primary w-4 rounded-md bg-yellow" type="checkbox" />
                    </div>
                    <div className="flex justify-between pt-1">
                        <div className="">Chicken</div>
                        <input onChange={handleChange} name='Chicken' className="p-3 btn-primary w-4 rounded-md bg-yellow" type="checkbox" />
                    </div>


                </div>
            </td>
            <td className=' border border-gray-300 p-4'>₹{newPrice}</td>
            <td  onMouseMove={handleCartTotal} className='w-28 border border-gray-300 p-4'>
                <a onClick={() => setQuantity(0)} className="btn btn-primary btn-sm w-full">X</a>
                <a onMouseMove={handleCartTotal} onClick={HandleOrder} className="btn btn-primary btn-sm w-full mt-2">+</a>
            </td>

        </tr>
    )
}

export default CartItem
