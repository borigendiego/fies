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
        autoPlaySpeed: 4000,
        speed: 1000,
        cssEase: "linear"
    };

    const SLIDES_DATA = [
        {
            linkTo: '/buro',
            image: '/assets/images/banner/bannerImage.jpg',
            title: 'Title example 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            linkTo: '/leistung',
            image: '/assets/images/banner/bannerImage-2.jpg',
            title: 'Title example 2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            linkTo: '/projekte',
            image: '/assets/images/banner/bannerImage-3.jpg',
            title: 'Title example 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            linkTo: '/kontakt',
            image: '/assets/images/banner/bannerImage-4.jpg',
            title: 'Title example 4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ] 


    return(
        <div className="overflow-hidden">
            <Slider {...settings}>
                {
                    SLIDES_DATA.map((value, index) => {
                        return(
                            <a href={value.linkTo} className='relative cursor-pointer z-10 h-screen'>
                                <img src={value.image} alt={''} className={'absolute object-cover'}/>
                                <div className="relative z-20 top-[70vh] left-[7vw]">
                                    <h1 className="text-white text-4xl">{value.title}</h1>
                                    <p className="text-white text-2xl">{value.text}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Slick;

