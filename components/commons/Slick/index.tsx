import React, { Component } from "react";
import Slider from "react-slick";
import { motion } from 'framer-motion';

const Slick = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 3000,
        speed: 1000,
        cssEase: "linear"
    };


    return(
        <div className="overflow-hidden">
            <Slider {...settings}>
                <a href={'/leistung'} className='relative cursor-pointer z-10 h-screen'>
                    <img src={'/assets/images/banner/bannerImage.jpg'} alt={''} className={'absolute'}/>
                    <div className="relative z-20 top-[70vh] left-[7vw]">
                        <h1 className="text-white text-4xl">Title example</h1>
                        <p className="text-white text-4xl">Text example daawda</p>
                    </div>
                </a>
                <a href={'/projekte'} className='relative cursor-pointer z-10'>
                    <img src={'/assets/images/banner/bannerImage.jpg'} alt={''} className={'absolute'}/>
                    <div className="relative z-20 top-[70vh] left-[7vw]">
                        <h1 className="text-white text-4xl">Title example2</h1>
                        <p className="text-white text-4xl">Text example daawda2</p>
                    </div>
                </a>
                <a href={'/kontakt'} className='relative cursor-pointer z-10'>
                    <img src={'/assets/images/banner/bannerImage.jpg'} alt={''} className={'absolute'}/>
                    <div className="relative z-20 top-[70vh] left-[7vw]">
                        <h1 className="text-white text-4xl">Title example3</h1>
                        <p className="text-white text-4xl">Text example daawda3</p>
                    </div>
                </a>
                <a href={'/kontakt'} className='relative cursor-pointer z-10'>
                    <img src={'/assets/images/banner/bannerImage.jpg'} alt={''} className={'absolute'}/>
                    <div className="relative z-20 top-[70vh] left-[7vw]">
                        <h1 className="text-white text-4xl">Title example4</h1>
                        <p className="text-white text-4xl">Text example daawda4</p>
                    </div>
                </a>
            </Slider>
        </div>
    )
}

export default Slick;

