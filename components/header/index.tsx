import React from 'react'
import Image from 'next/image'
import Nav from '../nav'
import { motion } from 'framer-motion';

const Header = () => {

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
            className={'md:flex md:justify-between md:px-28 md:py-7 sticky top-0 w-full z-10 duration-300 ease-linear overflow-hidden items-center'}
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: .5}}
        >
            <Image
                src={'/assets/images/logo.png'} 
                alt={''}
                width={50}
                height={30}
                className={'header-blue-logo absolute'}
            />
            <Image
                src={'/assets/images/logo-white.png'}
                className={'header-white-logo'}
                alt={''}
                width={80}
                height={80}
            />
            <Nav />
        </motion.nav>
    )
}

export default Header

