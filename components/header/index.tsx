import React from 'react'
import Image from 'next/image'
import Nav from '../nav'
//
import { motion } from 'framer-motion';
//

const Header = () => {
    /*
    if (process.browser) {
        // Client-side-only code
        const stickyFunction = () => window.addEventListener('scroll', function() {
            let navigation = document.querySelector('nav');

            if (navigation) {
                navigation.classList.toggle('sticky', window.scrollY > 0);
            }
        })
        stickyFunction();
    }
    */

    return(
        <motion.nav 
            className='md:flex md:justify-around md:py-4 fixed w-full z-20'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
        >
            <Image
                src={'/vercel.svg'} 
                alt={''}
                width={100}
                height={100}
            />
            <Nav />
        </motion.nav>
    )
}

export default Header

