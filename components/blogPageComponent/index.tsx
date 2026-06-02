'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


const BlogPageComponent = ({ blogsData }:any) => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <motion.h2 
                className='font-semibold mt-16 md:px-0 md:mx-0 mx-4 px-8 border-b-2'
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: .5, delay: 1}}
                viewport={{once: true}}
            >
                    Aktuelles
            </motion.h2>
            <motion.div 
                className='grid pt-12 max-w-[1100px] mx-auto'
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: .5, delay: 1.5}}
                viewport={{once: true}}
            >
                {
                    blogsData.map((value:any, index:any) => (
                        <div className="flex flex-col md:flex-row items-center md:gap-16 gap-4 py-12 first:pt-0 md:py-20 border-b-2 md:even:flex-row-reverse" key={index} id={value.id}>
                            <div className="md:w-[500px] w-[350px] h-[220px] md:h-[320px] relative ">
                                {value.image && <Image src={value.image} alt="" objectFit="cover" objectPosition='center center' fill className='rounded-lg' />}
                            </div>
                            <div className="flex flex-col pb-6 md:w-1/2 w-[360px]">
                                <div className="flex justify-between">
                                    <p>
                                        {new Date(value.date).toLocaleDateString('de', { year: 'numeric', month: 'long', day:'numeric' })}
                                    </p>
                                </div>
                                <h3 className="text-2xl font-bold pt-6">{value.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: value.excerpt }} className='text-sm'></div>
                                <Link href={`/aktuelles/${value.id}`} className='p-3 cursor-pointer w-fit mt-4
                                    rounded-xl duration-300 bg-[#89adcd99]
                                    hover:bg-[#7294b29c] hover:text-white font-bold'>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default BlogPageComponent;