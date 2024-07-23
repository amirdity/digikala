import React from 'react'
import PropTypes from 'prop-types'
import StorySlide from './StorySlide'

function Homepage() {
  return (
    <div className="flex flex-col gap-y-4 items-center max-w-[1920px] overflow-hidden">
      <StorySlide />
    </div>
  );
}

Homepage.propTypes = {}

export default Homepage
