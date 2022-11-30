import React from "react";
import { motion } from "framer-motion";
import './constants'
import { GRUNDSTUCK_DATA } from "./constants";
import Image from "next/image";


const Grundstuck = () => {
    return(
        <div id="#grundstück">
            <motion.div 
                className='grid md:grid-cols-4 gap-2 md:mx-auto px-10 my-16'
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 1.5}}
            >
                {
                    GRUNDSTUCK_DATA.map((item, index) => {
                        return (
                            <div 
                                key={index}
                                className={`flex flex-col w-[270px] mx-auto mt-8`}
                            >
                                <Image src={item.image} alt={''} height={200} width={250} />
                                <h2 className='text-2xl font-semibold pt-3'>{item.title}</h2>
                                <p className='pt-3'>{item.text}</p>
                            </div>
                        )
                    })  
                }
            </motion.div>
        </div>
    )
}

export default Grundstuck;