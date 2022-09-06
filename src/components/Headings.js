import React from 'react'

const Headings = ({heading}) => {
  return (
    <div className='headings'>
        <div className='horizontal_line'></div>
        <p>{heading}</p>
        <div className='horizontal_line'></div>
      </div>
  )
}

export default Headings