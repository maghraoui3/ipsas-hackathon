import React from 'react'

function NotFound() {
  return (
    <div className='h-[80vh] flex flex-col align-middle items-center justify-center'>
      <p className='text-8xl font-bold'>404</p>
      <p className='text-3xl font-semibold'>Oops! You're lost.</p>
      <p>The page you're looking for was not found.</p>
    </div>
  )
}

export default NotFound