import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const HeaderLogo = () => {
  return (
      <Link href="/">
    <div className='item-center hidden lg:flex'>
        <Image src="/logo.svg" alt='logo' width={30} height={30} />
        <p className='font-semibold text-2xl text-white ml-2.5'>
            FineAss
        </p>
        </div>
    </Link>
  )
}

export default HeaderLogo