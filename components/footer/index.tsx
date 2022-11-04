import React from 'react';
//

//
import { motion } from 'framer-motion';


const toTop = () => {
    document.documentElement.scrollTop = 0;
}

const Footer = () => {
    return(
       <div className='bg-teal-500 md:h-[40vh] md:flex md:pt-16 md:pl-20 justify-around'>
            <div>
                <div>
                    <a className='hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg'>#Office location <br/>#Adress, postal code</a>
                </div>
                <div className='mt-4 flex flex-col'>
                    <a href="" className='hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg'>#Cellphone</a>
                    <a href="" className='hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg'>#Email</a>
                </div>
            </div>
            <div>
                #Social media
            </div>
            <motion.button 
            className='footer-b cursor-pointer text-lg h-8'
            onClick={toTop}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1}}
            >
                Back to top
            </motion.button>
       </div> 
    )
}

export default Footer;
