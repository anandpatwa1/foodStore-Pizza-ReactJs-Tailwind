import React from 'react'
import food from '../assets/bg3.png'
import background from '../assets/food3.jpg'

function SpecialCombo() {
    return (
        <section className="bg-cover" style={{ backgroundImage: `url(${background})` }}>
            <div className="container flex flex-col justify-center p-2 mx-auto sm:py-3 lg:py-5 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 w-full">
                    <img src={food} alt="" className="object-contain w-[80%]" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left text-white">
                    <p className="mt-6 mb-2 text-lg sm:mb-5">SPECIAL COMBO PACK</p>
                    <h1 className=" text-3xl leading-none sm:text-5xl">GET A 
                        <span className="yellow"> 20%</span>DISCOUNT <br />
                        SPECIAL PIZZA EVERY <br />
                        TIME <span className="yellow">FOR YOU!</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">The pizza here is real amazing and would recommend
                        <br className="hidden md:inline lg:hidden"/> trying these guys out.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a href='#products' className="px-8 py-3 text-lg rounded hover:bg-transparent hover:text-white text-black bg-yellow transition-all border-white border">Order Now</a>
                        <a  href="#" className="px-8 py-3 text-lg border rounded border-white bg-yellowDark  hover:text-black transition-all ">Home</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialCombo
