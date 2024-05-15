'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import Image from 'next/image';
import VideoReproductor from "../../videoReproductor";

const Slick = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 7000,
        speed: 500,
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
            linkTo: '/projekte/#Heimstetten',
            image: '/assets/images/projekts/heimstetten/Heimstetten-1.webp',
            title: 'PROJEKT: Heimstetten',
            text: ''
        },
    ] 

    const [openReproductor, setOpenReproductor] = useState(false);

    const toggleReproductor = () => {
        setOpenReproductor(!openReproductor)
    }

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
                                    <div className="relative z-10">
                                        <button onClick={toggleReproductor} className="text-white p-4 rounded-full bg-slate-200/20 duration-500
                                         absolute right-0 left-0 mx-auto top-1/2 -translate-y-1/2 z-20 w-fit hover:bg-slate-200/80 hover:text-black">
                                                Play
                                        </button>
                                        <div className="absolute h-full w-full bg-black/50 left-0 top-0 "></div>
                                        <video autoPlay muted loop className={'object-cover h-screen w-screen'}>
                                            <source src={value.src} type="video/mp4" />
                                        </video> 
                                        <div className="absolute z-40 top-[75vh] py-6 pl-10">
                                            <h1 className={"text-white relative z-10 mt-6 font-semibold text-4xl"}>
                                                {value.title}
                                            </h1>

                                        </div>
                                    </div>
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
                                <div className='absolute h-full w-full bg-black/25 z-20' />
                                <div className="relative z-30 top-[75vh] py-6 pl-10">
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
            <VideoReproductor isReproductorOpen={openReproductor} closeReproductor={toggleReproductor} />
        </motion.div>
    )
}

export default Slick;
