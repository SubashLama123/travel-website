import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Newscard from './Newscard'

const News = () => {
  return (
    <div className='pt-16 pb-16'>
      {/* Section Heading */}
      <SectionHeading heading='Exciting Travel News for You' />
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
        <div>
          <Newscard image="/images/n1.jpg"
            title="Top 10  place to visit in Austrillia"
            date="15 November 2024"
          />
        </div>
        <div>
          <Newscard image="/images/n2.jpg"
            title="Top 10  place to visit in Bangaladesh"
            date="15 November 2024"
          />
        </div>
        <div>
          <Newscard image="/images/n3.jpg"
            title="Top 10  place to visit in Pakistan"
            date="15 November 2024"
          />
        </div>
        <div>
          <Newscard image="/images/n4.jpg"
            title="Top 10  place to visit in New Zealand"
            date="15 November 2024"
          />
        </div>
      </div>
    </div>
  )
}

export default News