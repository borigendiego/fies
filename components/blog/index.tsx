'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogSliderClient from "../commons/BlogSlider/BlogSliderClient";


const BlogWrapper = () => {

    return(
        <div className="mt-12 mb-32 mx-auto">
            <div className="md:w-[1300px] mx-auto flex flex-col gap-4">
                <Link href={'/aktuelles'} className="w-fit hover:underline mt-4">
                    <motion.h2
                        className="pl-6 md:pl-0"
                        initial={{opacity: 0, y: 15}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: .5, delay: .5}}
                        viewport={{once: true}}
                    >
                        AKTUELLES
                    </motion.h2>
                </Link>
                <BlogSliderClient />
            </div>
        </div>
    )
}

export default BlogWrapper
