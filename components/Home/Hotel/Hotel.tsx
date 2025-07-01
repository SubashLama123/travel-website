import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'


const Hotel = () => {
  return (
    <div className='pt-20 pb-20 '>
      {/* Section heading */}
      <SectionHeading heading='Recommended Hotels' />
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8  items-center mt-16'>
        {/* hotelcard  */}


      </div>
    </div>
  )
}

export default Hotel