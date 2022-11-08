import React from 'react'
import Image from 'next/image'
import Nav from '../nav'
//
import { motion } from 'framer-motion';
//

const Header = () => {

    if (process.browser) {
        // Client-side-only code
        const stickyFunction = () => window.addEventListener('scroll', function() {
            let navigation = document.querySelector('nav');

            if (navigation) {
                navigation.classList.toggle('scroll-nav', window.scrollY > 0);
            }
        })
        stickyFunction();
    }

    return(
        <motion.nav 
            className='md:flex md:justify-around md:py-7 fixed w-full z-40 duration-300 ease-linear overflow-hidden'
            initial={{opacity: 0, y: -15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: .5}}
        >
            <Image
                src={'/assets/images/logo.png'} 
                alt={''}
                width={40}
                height={40}
            />
            <Nav />
        </motion.nav>
    )
}

export default Header

