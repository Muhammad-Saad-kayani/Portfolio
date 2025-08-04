import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='px-24 sm:py-6 xl:py-8 text-white'>
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className='text-4xl font-semibold font-serif'>SAAD<span className='text-accent'>.</span>
                </h1>
            </Link>
            <div className='hidden xl:flex items-center gap-8'>
            <Nav />
            <Link href='/contact'>
                <Button className="cursor-pointer h-auto py-2 px-4 text-black text-base font-normal">Hire me</Button>
            </Link>
            </div>
            <div className='xl:hidden'>
                <MobileNav />
            </div>
        </div>
    </header>
)
}

export default Header
