import React from "react";
import Layout from '../commons/textImageLayout';
import { LAYOUT_DATA } from '../commons/textImageLayout/constans';

const LayoutDisplayer = () => {
    return(
        <div>
            {
                LAYOUT_DATA.map((value, index) => {
                    return <Layout title={value.title} image={value.image} text={value.text} reverse={value.reversed}/>
                })
            }
        </div>
    )
}

export default LayoutDisplayer;