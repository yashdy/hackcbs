import React from 'react'

const Pricing = ({pricing}) => {
  return (
    <>
    <section class="text-gray-400 bg-black body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
      
    </div>
    <div class="flex flex-wrap justify-center -m-4">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">START</h2>
          <h1 class="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">{pricing}</h1>
          <p class="flex items-center text-gray-400 mb-2">
            <span class="text-yellow-400 w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>LifeTime Ownership
          </p>
          <p class="flex items-center text-gray-400 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Full Access
          </p>
        
          <button class="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 my-5 w-full focus:outline-none hover:bg-gray-700 rounded">Buy Now
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button class="mt-5 flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 my-5 w-full focus:outline-none hover:bg-gray-700 rounded">Buy with QR
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-400 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
    </>
  )
}

export default Pricing