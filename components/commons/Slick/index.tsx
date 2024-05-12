'use client'
import React from "react";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import Image from 'next/image';

const Slick = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 7000,
        speed: 1000,
        cssEase: "ease-in"
    };

    const SLIDES_DATA = [
        {
            linkTo: 'https://www.meine-woche.de/staedte/willich/spatenstich-auf-dem-toholt-gelaende-in-willich_aid-73284361',
            src: 'https://res.cloudinary.com/du31j65g6/video/upload/v1705396237/Spektrum/Willich_Zeitraffer_comp_h8mthy.mp4',
            image: '',
            title: 'Willich Bauarbeiten',
        },
        {
            linkTo: '/projekte/#Willich',
            image: '/assets/images/projekts/willich/willich-6.webp',
            title: 'PROJEKT: Willich',
            text: ''
        },
        {
            linkTo: '/projekte/#Airpark',
            image: '/assets/images/projekts/airpark/airpark-2.webp',
            title: 'PROJEKT: Airpark',
            text: ''
        },
        {
            linkTo: '/leistung',
            image: '/assets/images/banner/tragwerksplanung.webp',
            title: 'Leistung',
            text: ''
        },
        {
            linkTo: '/projekte/#Willich',
            image: '/assets/images/projekts/willich/willich-4.webp',
            title: 'PROJEKT: Willich',
            text: ''
        },
        {
            linkTo: '/projekte/#Heimstetten',
            image: '/assets/images/projekts/heimstetten/Heimstetten-1.webp',
            title: 'PROJEKT: Heimstetten',
            text: ''
        },
    ] 


    return(
        <motion.div 
            initial={{
                opacity: 0,
                }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{duration: 1, delay: .5}}
        >
            <Slider {...settings}>
                {
                    SLIDES_DATA.map((value, index) => {
                        if (index === 0) {
                            return(
                                <a href={'https://www.meine-woche.de/staedte/willich/spatenstich-auf-dem-toholt-gelaende-in-willich_aid-73284361'}>
                                    <div className="relative">
                                        <div className="absolute h-full w-full bg-black/40 left-0 top-0 "></div>
                                        <video autoPlay muted className={'object-cover h-screen w-screen'}>
                                            <source src={value.src} type="video/mp4" />
                                        </video> 
                                        <div className="absolute z-40 top-[75vh] py-6 pl-10">
                                            <h1 className={"text-white relative z-10 mt-6 font-semibold text-4xl"}>
                                                {value.title}
                                            </h1>
                                        </div> 
                                    </div>
                                </a>
                                
                    
                            )
                        }

                        return (
                            <a key={`${value.title}-${index}`} href={value.linkTo} className='relative cursor-pointer z-10 h-screen'>
                                <Image 
                                    src={value.image}
                                    className={'absolute object-cover'}
                                    fill
                                    alt={value.title}
                                />
                                <div className='absolute h-full w-full bg-[#282c34] z-30 opacity-20' />
                                <div className="relative z-40 top-[75vh] py-6 pl-10">
                                    <h1 className={"text-white relative z-10 mt-6 font-semibold text-4xl"}>
                                        {value.title}
                                    </h1>
                                    <p className={"text-white text-xl relative z-10"}>{value.text}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </Slider>
        </motion.div>
    )
}

export default Slick;
