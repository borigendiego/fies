import Link from 'next/link'
import React from 'react'
import NAV_DATA from './constants'
//

//

const Nav = () => {
    return(
        <div>
            {NAV_DATA.map((value, index) => <Link 
            href={value.link} 
            className={'md:mx-4 md:p-4 hover:opacity-50 transition-all duration-200 ease-in cursor-pointer text-lg text-white nav-item'}
            >{value.label}</Link>)}
        </div>
    )
}

export default Nav