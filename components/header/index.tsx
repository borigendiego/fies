'use client'
import React from 'react'
import Image from 'next/image'
import Nav from '../nav'
import { motion } from 'framer-motion';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import { MENU_LINKS } from './constants'

type HeaderPropType = {
    isHomePage?: boolean
};

const Header = ({ isHomePage }:HeaderPropType) => {

    return(
        <motion.nav
            id='header-nav'
            className={`flex justify-between md:px-8 ${isHomePage ? 'fixed bg-none backdrop-blur-none' : 'sticky bg-[#89ADCD80] backdrop-blur-sm'} top-0 w-full z-20 items-center`}
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: .5}}
        >
            <div className='flex gap-3 py-6 items-center justify-center'>
                <Link href={'/'} className='relative w-[44px] h-[44px]'>
                    <Image
                        src={'/assets/images/Logo_white2.png'}
                        className={'header-white-logo hover:scale-110'}
                        alt={'Logo'}
                        fill
                    />
                </Link>
                <Link href={'/'}>
                    <div className='flex flex-col h-[44px] justify-between'>
                        <h2 className='text-2xl leading-[22px] text-white uppercase hbold'>Spektrum</h2>
                        <p className='text-white '>Architekten | Generalplaner</p>
                    </div>
                </Link>

            </div>
            <Nav />
            <MobileMenu menuItems={MENU_LINKS} />
        </motion.nav>
    )
}

export default Header

