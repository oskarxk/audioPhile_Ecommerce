import React from 'react'

import shared1 from 'Assets/shared/mobile/image-zx7-speaker.jpg'
import shared2 from 'Assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
import shared3 from 'Assets/shared/mobile//image-xx59-headphones.jpg'

export const RecomendedProducts = () => {
  return (
    <div className="w-3/4 flex flex-col items-center justify-between">
      <p className="font-bold text-2xl my-4 text-center">YOU MAY ALSO LIKE</p>
      <div>
        <img src={shared1} alt="shared1" className="rounded-md mt-8" />
        <p className="font-bold text-2xl my-8 text-center">ZX7 SPEAKER</p>
        <button className="h-25 w-1/2 my-2 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]">
          SEE PRODUCT
        </button>
      </div>
      <div>
        <img src={shared2} alt="shared1" className="rounded-md mt-8" />
        <p className="font-bold text-2xl my-8 text-center">XX99 MARK I</p>
        <button className="h-25 w-1/2 my-2 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]">
          SEE PRODUCT
        </button>
      </div>
      <div>
        <img src={shared3} alt="shared1" className="rounded-md mt-8" />
        <p className="font-bold text-2xl my-8 text-center">XX59</p>
        <button className="h-25 w-1/2 my-2 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]">
          SEE PRODUCT
        </button>
      </div>
    </div>
  )
}
