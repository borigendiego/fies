import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Button = () => {
    return(
        <motion.button 
            className='md:p-3 fixed cursor-pointer bottom-[45px] right-[45px] z-40 rounded-xl duration-300 common-button font-bold border border-black'
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
        >
            <Link
                href={'/kontakt'}
            >
                Wir stellen ein!
            </Link>
        </motion.button>
    )
}

export default Button
