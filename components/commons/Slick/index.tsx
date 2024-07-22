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
        autoPlaySpeed: 5000,
        speed: 1000,
        cssEase: "ease-in"
    };

    const SLIDES_DATA = [
        {
            linkTo: 'https://www.meine-woche.de/staedte/willich/spatenstich-auf-dem-toholt-gelaende-in-willich_aid-73284361',
            src: 'https://res.cloudinary.com/du31j65g6/video/upload/v1705396237/Spektrum/Willich_Zeitraffer_comp_h8mthy.mp4',
            image: '/assets/images/projekts/willich/Willich-6.webp',
            title: 'PROJEKT: Willich',
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
            className={openReproductor ? 'relative z-20' : ''}
        >
            <Slider {...settings}>
                {
                    SLIDES_DATA.map((value, index) => {
                        if (index === 0) {
                            return (
                                    <div className="relative z-10 h-screen w-screen" key={index}>
                                        <button
                                            onClick={toggleReproductor}
                                            className="text-white p-4 rounded-full bg-slate-200/20 duration-500 absolute right-0 left-0 mx-auto top-1/2 -translate-y-1/2 z-20 w-fit hover:bg-slate-200/80 hover:text-black">
                                                <svg
                                                    height="50px"
                                                    width="50px"
                                                    version="1.1"
                                                    id="_x32_"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="#000000"
                                                >
                                                    <path d="M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256c141.374,0,256-114.626,256-256 C512,114.625,397.374,0,256,0z M351.062,258.898l-144,85.945c-1.031,0.626-2.344,0.657-3.406,0.031 c-1.031-0.594-1.687-1.702-1.687-2.937v-85.946v-85.946c0-1.218,0.656-2.343,1.687-2.938c1.062-0.609,2.375-0.578,3.406,0.031 l144,85.962c1.031,0.586,1.641,1.718,1.641,2.89C352.703,257.187,352.094,258.297,351.062,258.898z">
                                                    </path>
                                                </svg>
                                        </button>
                                        <div className="absolute h-full w-full bg-black/50 left-0 top-0"></div>
                                        <Image
                                            src={value.image}
                                            className={'object-cover'}
                                            fill
                                            alt={value.title}
                                        />
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
