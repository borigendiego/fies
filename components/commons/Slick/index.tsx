import Link from "next/link";
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
            linkTo: '/projekte',
            image: '/assets/images/banner/banner-1-min.jpg',
            title: 'Projektenwicklung',
            text: ''
        },
        {
            linkTo: '/uber#2',
            image: '/assets/images/banner/banner-2-min.png',
            title: 'Generalplanung',
            text: ''
        },
        {
            linkTo: '/lesitung',
            image: '/assets/images/banner/banner-3-min.jpg',
            title: 'Leistung',
            text: ''
        },
        {
            linkTo: '/kontakt',
            image: '/assets/images/banner/banner-4-min.jpg',
            title: 'Projektsteuerung',
            text: ''
        },
    ] 


    return(
        <motion.div 
            className="overflow-hidden"
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
                            <Link key={`${value.title}-${index}`} href={value.linkTo} className='relative cursor-pointer z-10 h-screen'>
                                <Image 
                                    src={value.image}
                                    className={'absolute object-cover'}
                                    fill
                                    alt={value.title}
                                />
                                <img src={value.image} alt={''} className={'absolute object-cover'}/>
                                <div className="relative z-20 top-[70vh] py-6 pl-10">
                                    <div className={'absolute z-0 left-0 w-2/4 h-full bg-[#89ADCD80] backdrop-blur-sm rounded-r-lg'} />
                                    <h1 className={"text-white relative z-10 mt-6"}>
                                        {value.title}
                                    </h1>
                                    <p className={"text-white text-xl relative z-10"}>{value.text}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </Slider>
        </motion.div>
    )
}

export default Slick;

