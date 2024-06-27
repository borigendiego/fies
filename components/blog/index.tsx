'use client'
import React from "react";
import SwiperSlider from "../swiperSlider";
import { motion } from "framer-motion";


const BlogWrapper = ({ blogsData }:any ) => {

    return(
        <div className="mt-24 mb-32 mx-auto">
            <motion.h2 
                className="md:w-[1250px] mx-auto mt-12 pb-6 pl-6 md:pl-0"
                initial={{opacity: 0, y: 15}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: .5, delay: .5}}
                viewport={{once: true}}
            >
                AKTUELLES
            </motion.h2>
            <SwiperSlider SwiperData={blogsData} />
        </div>
    )
}

export default BlogWrapper