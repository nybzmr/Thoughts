import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-white shadow-md shadow-gray-300 rounded-md p-4'>{children}</div>
  )
}

export default Card