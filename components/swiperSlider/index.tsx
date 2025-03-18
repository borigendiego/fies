'use client'
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {FreeMode, Pagination, Navigation, Scrollbar, A11y} from 'swiper/modules'
import Image from 'next/image';

const SwiperSlider = ({ SwiperData }:any) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 15}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: 1}}
            viewport={{once: true}}
        >
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    720: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
                navigation
                speed={500}
                scrollbar={{ draggable: true }}
                freeMode={true}
                modules={[FreeMode, Pagination, Navigation, Scrollbar, A11y]}
                className='md:max-w-[1300px] cursor-grab'
            >
                <div className='flex cursor-grab'>
                    {
                        SwiperData.map((value:any, index:any) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col items-center p-4 md:w-[300px] h-[320px] bg-white hover:shadow-xl duration-700'>
                                    <div className='relative md:w-[300px] w-[340px] min-h-[360px] md:min-h-[320px] group cursor-pointer'>
                                        <Link href={`/aktuelles#${value.id}`}>
                                            <Image src={`${value.image}`} fill alt='' objectPosition='center center' objectFit='cover' className='' />
                                            <div className='flex flex-col justify-end pt-4 absolute h-full w-full left-0 top-0 bg-black/30 md:opacity-30 duration-700 group-hover:opacity-100'>
                                                <h2 className='text-xl text-white font-bold p-4 md:opacity-0 duration-700 group-hover:opacity-100'>{value.title}</h2>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <SwiperSlide >
                        <div className='md:w-[350px] h-[400px] p-4 mx-auto md:mx-0'>
                            <Link href={'/aktuelles'} >
                                <div className='flex flex-col justify-center items-center md:w-[310px] w-[340px] md:h-[320px] h-[360px] group hover:bg-[#89adcdcc] bg-[#89adcdcc] md:bg-white backdrop-blur-sm cursor-pointer duration-1000'>
                                    <h2 className='text-xl text-black group-hover:text-white duration-700'>READ MORE</h2>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </motion.div>
    );
};

export default SwiperSlider;