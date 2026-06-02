'use client';
import React from 'react';
import Image from 'next/image';
import Nav from '../nav';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import { MENU_LINKS } from './constants';

type HeaderPropType = {
    isHomePage?: boolean
};

const Header = ({ isHomePage }:HeaderPropType) => {
    return (
        <motion.nav
            id='header-nav'
            className={`flex justify-between md:px-8 py-4 ${isHomePage ? 'fixed bg-none backdrop-blur-none' : 'sticky bg-[#89ADCD80] backdrop-blur-sm'} top-0 w-full z-20 items-center`}
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: .5}}
        >
            <div className='lg:w-[1300px] w-[90vw] flex justify-between items-center mx-auto'>
                <div className='flex items-center justify-center gap-4'>
                    <Link href={'/'}>
                        <Image
                            src={'/assets/images/logo-white-crop.png'}
                            className={'header-white-logo'}
                            alt={'Spektrum Architektur Logo'}
                            width={46}
                            height={46}
                        />
                    </Link>
                    <Link href={'/'}>
                        <div className='flex flex-col justify-between'>
                            <h1 className='text-2xl text-white uppercase hbold'>Spektrum</h1>
                            <p className='text-white md:text-base'>Architektur | Generalplanung</p>
                        </div>
                    </Link>
                </div>
                <Nav />
                <MobileMenu menuItems={MENU_LINKS} />
            </div>
        </motion.nav>
    )
}

export default Header

