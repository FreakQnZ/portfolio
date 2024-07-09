import { defaultOverrides } from 'next/dist/server/require-hook'
import React from 'react'
import { FloatingNav } from './ui/floating-navbar'

const Navbar = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
            // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Projects",
            link: "#first",
            // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/contact",
            // icon: (
            //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            // ),
        },
    ];
    return (
        <div className='relative w-full hidden md:block'>
            <FloatingNav navItems={navItems} />
        </div>
    )
}

export default Navbar