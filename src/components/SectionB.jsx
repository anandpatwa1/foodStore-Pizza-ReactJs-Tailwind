import React from 'react'
import img from '../assets/first-section-pizza.png'


function SectionB() {
  return (
    <section>
	<div className="bg-[#FFCE23]">
		<div className="container flex flex-col items-center px-4 py-16 pb-6 mx-auto text-center lg:pb-56 md:py-14 md:px-10 lg:px-32 text-gray-900">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">EXPLORE THE NEW TASTE</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Amazing pizza. Family friendly and super cool design.</p>
			
		</div>
	</div>
	<img src={img} alt="" className="w-3/6 mx-auto mb-12 -mt-20 rounded-lg lg:-mt-48 rotate-180" />
</section>
  )
}

export default SectionB
