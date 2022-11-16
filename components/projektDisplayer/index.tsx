import React from "react";
import Projekt from "../projekt";
import { PROJEKTS_DATA } from "../projekt/constants";
//

const ProjektDisplayer = () => {
    return(
        <div>
            {
                PROJEKTS_DATA.map((value, index) => {
                    return (
                        <Projekt 
                            title={value.title} 
                            mainImage={value.mainImage} 
                            ort={value.ort} 
                            projekt={value.projekt} 
                            baukosten={value.baukosten}
                            leistungen={value.leistungen}
                            zeitraum={value.zeitraum}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProjektDisplayer;