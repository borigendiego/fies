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
       className='md:h-[40vh] md:flex md:pt-16 md:pl-20 justify-around bg-[#89ADCD]' 

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
                Back to top
            </motion.button>
       </motion.div> 
    )
}

export default Footer;

/*<div>
<a className='hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg'>#Office location <br/>#Adress, postal code</a>
</div>
<div className='mt-4 flex flex-col'>
    <a href="" className='hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg'>#Cellphone</a>
    <a href="" className='hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg'>#Email</a>
</div>
*/