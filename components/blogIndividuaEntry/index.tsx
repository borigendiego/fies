'use client'
import React from 'react';
import { motion } from 'framer-motion';
import BlogCoverImage from '../commons/BlogCoverImage';

const SingleBlogComponent = ({ blog }:any) => {
    return (
        <div className='flex flex-col items-center py-12'>
            <motion.div
                className="md:w-[700px] w-full"
                initial={{opacity: 0, y: 15}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: .5, delay: 1}}
                viewport={{once: true}}
            >
                {
                    blog.imageUrl
                    ? <BlogCoverImage
                        src={blog.imageUrl}
                        alt={blog.title}
                        width={700}
                        height={400}
                        className='w-full'
                        landscapeClassName='h-[300px] md:h-[380px]'
                        portraitClassName='h-[480px] md:h-[650px]'
                        imageClassName='lg:rounded-lg'
                    />
                    : <div className="h-[300px] md:h-[380px]" />
                }
            </motion.div>
            <motion.div
                className='border mt-12 w-[1000px] hidden md:block'
                initial={{opacity: 0, y: 15}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: .5, delay: 1.3}}
                viewport={{once: true}}
             />
            <motion.div
                className='flex flex-col gap-4 max-w-[900px] pt-12 md:mx-auto mx-8'
                initial={{opacity: 0, y: 15}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: .5, delay: 1.6}}
                viewport={{once: true}}
            >
                <p className='text-end'>
                    {new Date(blog.date).toLocaleDateString('de', { year: 'numeric', month: 'long', day:'numeric' })}
                </p>
                <h2 className='font-semibold'>{blog.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: blog.content }} className='flex flex-col gap-6 blog-content'></div>
            </motion.div>
        </div>
    );
};

export default SingleBlogComponent;
