import React from "react";
//
import { motion } from "framer-motion";

const ProjektComponent = () => {
    return(
        <div className='h-screen bg-red-800 flex flex-col justify-center items-center'>
            <motion.div 
                className='bg-[#89ADCD] p-8 rounded-xl'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1.5, delay: 1}}
                viewport={{once: true}}
            >
                <h1 className='text-white text-center text-2xl'>PROJEKTE:</h1>
                <p className='text-white text-center text-2xl'>Wir ubernehmen</p>
                <p className='text-white mt-8 text-xl'>
                    Ihre PROJEKTE deutschlandweit,<br/>
                    in jeder GroBenourdnung
                </p>
            </motion.div>
        </div>
    )
}

export default ProjektComponent;