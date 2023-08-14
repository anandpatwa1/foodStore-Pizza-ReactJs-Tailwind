import React from 'react'
import bgOne from '../assets/slider1.jpg'
import bgTwo from '../assets/slider2.jpg'
import bgThree from '../assets/slider3.jpg'

function HeroSection() {
    return (
        <>
            {/* <div className="carousel w-full ">
                <div id="item1" className="carousel-item w-full">
                    <img src={bgOne} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={bgOne} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={bgOne} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={bgOne} className="w-full" />
                </div>
            </div> */}
            <div className="h-full  flex ">
                <div id='item1' className='h-screen w-[100vw] bg-cover bg-center text-white flex items-center pl-16' style={{
                    backgroundImage: `url(${bgOne})`
                }}>
                    <div className="text-6xl">
                        WELCOME TO <br />
                        <h1 className="text-8xl yellow">DELICIOUS <br /></h1>
                        <h1 className="text-8xl">PIZZA!</h1>
                        <a href='#products' className="rounded-full text-3xl p-4 px-6  border-4 hover:border-[#FFCE23] hover:text-[#FFCE23] transition-all" >Order Now</a>
                    </div>
                </div>
            {/* <div id='item2' className='h-screen w-[100vw] bg-cover bg-center text-white flex items-center pl-16' style={{
                    backgroundImage: `url(${bgOne})`
                }}>
                    <div className="text-6xl">
                        WELCOME TO <br />
                        <h1 className="text-8xl yellow">DELICIOUS <br /></h1>
                        <h1 className="text-8xl">PIZZA!</h1>
                        <button className="rounded-full text-3xl p-4 px-6  border-4 hover:border-[#FFCE23] hover:text-[#FFCE23] transition-all" >Order Now</button>
                    </div>
                </div>
                <div id='item3' className='h-screen w-[100vw] bg-cover bg-center text-white flex items-center pl-16' style={{
                    backgroundImage: `url(${bgOne})`
                }}>
                    <div className="text-6xl">
                        WELCOME TO <br />
                        <h1 className="text-8xl yellow">DELICIOUS <br /></h1>
                        <h1 className="text-8xl">PIZZA!</h1>
                        <button className="rounded-full text-3xl p-4 px-6  border-4 hover:border-[#FFCE23] hover:text-[#FFCE23] transition-all" >Order Now</button>
                    </div>
                </div>
                <div id='item4' className='h-screen w-[100vw] bg-cover bg-center text-white flex items-center pl-16' style={{
                    backgroundImage: `url(${bgOne})`
                }}>
                    <div className="text-6xl">
                        WELCOME TO <br />
                        <h1 className="text-8xl yellow">DELICIOUS <br /></h1>
                        <h1 className="text-8xl">PIZZA!</h1>
                        <button className="rounded-full text-3xl p-4 px-6  border-4 hover:border-[#FFCE23] hover:text-[#FFCE23] transition-all" >Order Now</button>
                    </div>
                </div> */}
            </div>
            
        </>
    )
}

export default HeroSection