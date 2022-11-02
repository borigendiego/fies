import React from 'react';
//

//
import { motion } from 'framer-motion';

const Footer = () => {
    return(
       <div className='bg-teal-500 md:h-[40vh] md:flex'>
            <div>
                <div>
                    <a>Office location <br/> Adress</a>
                </div>
                <div className='mt-4'>
                    <a href="">Cellphone</a>
                    <a href="">Email</a>
                </div>
            </div>
            <div>
                Social media
            </div>
       </div> 
    )
}

export default Footer;
