import React from 'react'

function Offer() {
  return (
    <div className="p-6 py-12 bg-yellow ">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br className="sm:hidden"/>25% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg border-2 border-black p-2 rounded-md">FRIEND_OF_ANAND</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md  block bg-gray-900 yellow ">Shop Now</a>
		</div>
	</div>
</div>
  )
}

export default Offer
