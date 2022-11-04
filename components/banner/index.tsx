import React from 'react';
//

//
import { motion } from 'framer-motion';

const Banner = () => {
    return(
       <motion.div 
            className={`h-screen relative flex justify-center items-center bg-[url('/assets/images/banner/bannerImage.jpg')] bg-cover`}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            viewport={{ once: true }}
       >
            <h1 className='text-xl text-white'>#Banner component</h1>
       </motion.div> 
    )
}

export default Banner;
