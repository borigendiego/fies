import React from 'react'
//
import {motion} from 'framer-motion'
//

const Button = () => {
    return(
        <motion.button 
            className='md:bg-[#80D63A] md:p-3 fixed cursor-pointer bottom-[45px] right-[45px] z-40 rounded-xl'
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
        >
            Wir stellen ein!
        </motion.button>
    )
}

export default Button
