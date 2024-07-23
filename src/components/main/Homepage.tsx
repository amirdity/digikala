import React from 'react'
import PropTypes from 'prop-types'
import StorySlide from './StorySlide'

function Homepage() {
  return (
    <div className='flex flex-col gap-y-4 items-center '>
      <StorySlide/>
    </div>
  )
}

Homepage.propTypes = {}

export default Homepage
