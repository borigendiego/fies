import React from 'react';
//

//
import { motion } from 'framer-motion';
import Contact from './conctact';


const toTop = () => {
    document.documentElement.scrollTop = 0;
}

const Footer = () => {
    return(
       <motion.div 
        className='md:flex md:pt-16 md:pb-8 justify-around bg-[#89ADCD]' 
        id='#FOOTER'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:  .7, delay: .5}}
        viewport={{once: true}}
       >
            <motion.div
                initial={{opacity: 0, x: -15}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .5 , delay: 1.5}}
                viewport={{once: true}}
            >
                <Contact />
            </motion.div>
            <motion.button 
            className='footer-b cursor-pointer text-lg h-8 hover:underline'
            onClick={toTop}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 2}}
            >
                Zurück
            </motion.button>
       </motion.div> 
    )
}

export default Footer;
