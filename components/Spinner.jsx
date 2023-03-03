import Image from 'next/image'
import React from 'react'
import spinner from '../public/spinner.gif'

function Spinner() {
  return (
    <div>
        <Image src={spinner} alt="spinner" className="w-[200px] m-auto block" />
    </div>
  )
}

export default Spinner