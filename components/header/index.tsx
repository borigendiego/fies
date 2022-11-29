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

    return(
        <motion.nav 
            className={`flex md:justify-between justify-around md:px-28 md:py-2 ${isHomePage ? 'fixed bg-none backdrop-blur-none' : 'sticky bg-[#89ADCD80] backdrop-blur-sm'} top-0 w-full z-30 duration-300 ease-linear items-center`}
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: .5}}
        >
            <Link href={'/'}>
                <Image
                    src={'/assets/images/Logo_white.png'}
                    className={'header-white-logo hover:scale-105'}
                    alt={'Logo'}
                    width={120}
                    height={120}
                />
            </Link>
            <Nav />
            <MobileMenu menuItems={MENU_LINKS} />
        </motion.nav>
    )
}

export default Header

