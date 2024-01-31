import React from 'react'
import { Banner, Slider } from '~/components'
const HomePage = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Banner/>
      <Slider/>
    </div>
  )
}

export default HomePage