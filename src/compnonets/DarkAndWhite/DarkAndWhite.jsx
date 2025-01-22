import React from 'react'

const DarkAndWhite = () => {
  return (
    <div className='mt-3 flex flex-col justify-center items-center bg-white rounded-md shadow-md px-20 py-3 space-y-3'>
        <h2>Dark And White Mood</h2>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h3>Dark Mode: Enable/Disable</h3>
            <button className='bg-blue-500 text-white font-semibold px-10  rounded-md py-2'>Toggle Dark Mode</button>
        </div>
    </div>
  )
}

export default DarkAndWhite
