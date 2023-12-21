import Link from 'next/link'
import React from 'react'
import {FaRegSun, FaUserCircle} from "react-icons/fa"

const Header = () => {
  return (
    <div className='flex w-[95%] lg:flex-row flex-col justify-between p-4 items-center font-bold  min-h-28 align-middle bg-transparent pr-4'>
        <div className='flex text-lg lg:w-[15%] w-full max-w-52 justify-around not:lg:place-self-start align-middle items-center'>
            <Link href="/" className='text-orange-500'>Hotelzzz</Link>
            <Link href="/auth">
                <FaUserCircle/>
            
            </Link>
            <FaRegSun className="cursor-pointer" />

        </div>
        <div className='flex text-xl font-medium lg:w-[46%] w-full justify-between max-w-[30rem]'>
            <Link href="/">Home</Link>
            <Link href="/room">Rooms</Link>
            <h2>Contacts</h2>

        </div>

    </div>
  )
}

export default Header