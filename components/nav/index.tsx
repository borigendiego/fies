import React from 'react'
import NAV_DATA from './constants'
//

//

const Nav = () => {
    return(
        <div>
            {NAV_DATA.map((value, index) => <a 
            href={value.link} 
            className={'md:mx-2 md:p-4 hover:opacity-50 transition-all duration-200  ease-in'}
            >{value.label}</a>)}
        </div>
    )
}

export default Nav