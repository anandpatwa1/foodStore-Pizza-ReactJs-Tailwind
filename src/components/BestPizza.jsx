import React from 'react'
import img from '../assets/section-2-left-img.png'

function BestPizza() {
  return (
    <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 h-[700px]">
			<img src={img} alt="" className="object-contain h-[700px]" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
			<h1 className="text-5xl leading-none sm:text-6xl">WE MAKE THE BEST PIZZA <br /> IN YOUR CITY</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="">
				<div className="flex justify-around">
					<div className="flex flex-col justify-center items-center w-48 text-center bg-white">
						<img className='w-28' src="https://sktperfectdemo.com/demos/pizzas/wp-content/uploads/2022/12/section2-icon1.jpg" alt="" />
						<p className="text-base">THE USE OF NATURAL BEST QUALITY PRODUCTS</p>
					</div>
					<div className="flex flex-col justify-center items-center w-48 text-center bg-white">
						<img className='w-28' src="https://sktperfectdemo.com/demos/pizzas/wp-content/uploads/2022/12/section2-icon2.jpg" alt="" />
						<p className="text-base">A NEW LOOK ON THE RIGHT FOOD!</p>
					</div>
				</div>
				<div className="flex justify-around">
					<div className="flex flex-col justify-center items-center w-48 text-center bg-white mt-2">
						<img className='w-28' src="https://sktperfectdemo.com/demos/pizzas/wp-content/uploads/2022/12/section2-icon3-1-1.jpg" alt="" />
						<p className="text-base">WORLD’S BEST CHEF AND NUTRITIONIST</p>
					</div>
					<div className="flex flex-col justify-center items-center w-48 bg-white text-center mt-2">
						<img className='w-28' src="https://sktperfectdemo.com/demos/pizzas/wp-content/uploads/2022/12/section2-icon4-1-1.jpg" alt="" />
						<p className="text-base">FASTEST DELIVERY ON YOUR DOOR STEP</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default BestPizza