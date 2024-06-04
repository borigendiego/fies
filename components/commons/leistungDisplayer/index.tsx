import React from 'react';
import { LEISTUNG_DATA } from './constants';
import LeistungLayout from '../leistungLayout';

const LeistungDisplayer = ({ detail }:any) => {
    return (
        <div>
            {
                LEISTUNG_DATA.map((value, index) => {
                    return(
                        <LeistungLayout
                            key={index}
                            id={value.id}
                            title={value.title}
                            text={value.text}
                            image={value.image}
                            reverse={value.reverse}
                            detail={detail}
                         />
                    )
                })
            }
        </div>
    );
};

export default LeistungDisplayer;