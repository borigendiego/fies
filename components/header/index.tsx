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

    /*
    if (process.browser) {
        // Client-side-only code
        const stickyFunction = () => window.addEventListener('scroll', function() {
            let navigation = document.querySelector('nav');

            if (navigation) {
                navigation.classList.toggle('scroll-nav', window.scrollY > 0);
            }
        });
        stickyFunction();
    };
    */

    return(
        <motion.nav 
            id='header-nav'
            className={`flex justify-between md:px-8 ${isHomePage ? 'fixed bg-none backdrop-blur-none' : 'sticky bg-[#89ADCD80] backdrop-blur-sm'} top-0 w-full z-30 items-center`}
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: .5}}
        >
            <div className='flex items-center justify-center'>
                <Link href={'/'}>
                    <Image
                        src={'/assets/images/Logo_white.png'}
                        className={'header-white-logo hover:scale-110'}
                        alt={'Logo'}
                        width={85}
                        height={80}
                    />
                </Link>
                <div className='flex flex-col mt-[5%]'>
                    <h1 className='text-2xl leading-5 text-white uppercase hbold'>Spektrum</h1>
                    <p className='text-white md:text-base'>Architekten | Generalplaner</p>
                </div>
            </div>
            <Nav />
            <MobileMenu menuItems={MENU_LINKS} />
        </motion.nav>
    )
}

export default Header

