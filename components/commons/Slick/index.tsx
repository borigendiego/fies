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
        autoPlaySpeed: 4000,
        speed: 1000,
        cssEase: "linear"
    };

    const SLIDES_DATA = [
        {
            linkTo: '/projekte/#Willich',
            image: '/assets/images/projekts/willich/willich-6.jpg',
            title: 'PROJEKT: Willich',
            text: ''
        },
        {
            linkTo: '/projekte/#Willich',
            image: '/assets/images/banner/banner-1-min.jpg',
            title: 'PROJEKT: Willich',
            text: ''
        },
        {
            linkTo: '/projekte/#Airpark',
            image: '/assets/images/banner/banner-airpark.png',
            title: 'PROJEKT: Airpark',
            text: ''
        },
        {
            linkTo: '/leistung',
            image: '/assets/images/banner/banner-3-min.jpg',
            title: 'Leistung',
            text: ''
        },
        {
            linkTo: '/projekte/#Heimstetten',
            image: '/assets/images/banner/banner-4-min.jpg',
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
                        return (
                            <a key={`${value.title}-${index}`} href={value.linkTo} className='relative cursor-pointer z-10 h-screen'>
                                <img 
                                    src={value.image}
                                    className={'absolute object-cover'}
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

