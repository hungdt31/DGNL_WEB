import React from 'react'
import Banner from '~/components/banner/Banner'
import Slider from '~/components/slider/Slider'
const HomePage = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Banner/>
      <Slider/>
    </div>
  )
}

export default HomePage