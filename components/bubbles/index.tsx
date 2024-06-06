'use client'
import React from "react";
import { motion } from "framer-motion";
import { BUBBLES_DATA } from "./constants";

const Bubbles = () => {
    const imagesChild = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: 0},
    }


    return(
        <div>
            <div className="min-h-[100vh] relative md:flex hidden mt-6 justify-center p-3">
                <div className={'justify-center w-full relative max-w-[1300px]'}>
                    {
                        BUBBLES_DATA.map((value) => {
                            return(
                                <motion.div 
                                    className={`${value.customClass} outer-b `}
                                    style={{
                                        left: value.left,
                                        top: value.top,
                                        right: value.right
                                    }}
                                    variants={imagesChild}
                                    initial={'hidden'}
                                    whileInView={'visible'}
                                    viewport={{once: true}}
                                    transition={{duration: 1, delay: value.delay}}
                                >
                                    <motion.a 
                                        className={`inner-b`}
                                        variants={imagesChild} 
                                        transition={{duration: .7, delay: value.delay}}
                                        href={`${value.link}`}
                                    >
                                        {value.title}
                                    </motion.a>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="md:hidden flex flex-col items-center my-10 gap-5">
                {
                    BUBBLES_DATA.map((value) => {
                        return(
                            <motion.a 
                                className='rounded-full w-[300px] h-[300px] flex justify-center items-center shadow-2xl'
                                style={{
                                    backgroundColor: `${value.color}`,
                                }}
                                variants={imagesChild}
                                href={`${value.link}`}
                                initial={'hidden'}
                                whileInView={'visible'}
                                viewport={{once: true}}
                                transition={{duration: 1, delay: value.delay}}
                            >
                                <p className="text-white text-[22px] font-bold">
                                    {value.title}
                                </p>
                            </motion.a>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Bubbles;
