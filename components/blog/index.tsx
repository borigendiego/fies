import React from "react";
import SwiperSlider from "../swiperSlider";


const BlogWrapper = ({ blogsData }:any ) => {

    return(
        <div className="mt-24 mb-32 mx-auto">
            <h2 className="md:w-[1250px] mx-auto mt-12 pb-6 pl-6 md:pl-0">AKTUELLES</h2>
            <SwiperSlider SwiperData={blogsData} />
        </div>
    )
}

export default BlogWrapper