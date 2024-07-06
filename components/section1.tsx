"use client";

import { useState, useEffect } from 'react'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Link from 'next/link';
import Image from 'next/image';
import jwt from './images/jwt.png'
import tmngr from './images/taskmanager.png'
import churn from './images/churn.png'
import robin from './images/robin.png'
import github from './images/github.png'
import { PinContainer } from './ui/3d-pin';
import { BackgroundBeams } from './ui/background-beams';

const Section1 = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );

    const Auth = () => (
        <div className='flex justify-center'>
            <Image src={jwt} alt="auth" width={220} />
        </div>
    )
    const items = [
        {
            title: "Auth Module",
            description: "Auth module made from scratch using JWT, includes signup login and forgot password feature",
            placeholder: "Github Link",
            href: "https://github.com/FreakQnZ/Auth-Module",
            img: jwt,
            imgClass: "",
            width: 300
        },
        {
            title: "Robin Internships",
            description: "Platofrom originally created for handling College fest student internships.",
            placeholder: "Live Site Link",
            href: "https://robinit.in/",
            img: robin,
            imgClass: "pt-10",
            width: 300
        },
        {
            title: "Task Manager",
            description: "Task Manager web application with auth using clerk and a responsive and unique design.",
            placeholder: "Live Site Link",
            href: "https://task-manager-web-application-nine.vercel.app/",
            img: tmngr,
            imgClass: "pt-6",
            width: 300
        },
        {
            title: "Anonymous Chat Room App",
            description: "Chat App with Websockets for anonymous chating in rooms",
            placeholder: "Github Link",
            href: "https://github.com/FreakQnZ/CN-Project---Chat-app-with-WebSockets",
            img: jwt,
            imgClass: "",
            width: 300
        },
        {
            title: "Churn Prediction",
            description: "Using Tensorflow to create a Deep Learning Model to predict Customer Loyalty",
            placeholder: "Github Link",
            href: "https://github.com/FreakQnZ/Neural-Network-Project",
            img: churn,
            imgClass: "pt-6 pl-10",
            width: 200
        },
        {
            title: "And Much More on my Github",
            description: "Check out my Github for more projects and projects I am working on.",
            placeholder: "Github Link",
            href: "https://github.com/FreakQnZ",
            img: github,
            imgClass: "pt-6 pl-16",
            width: 180
        },
        // {
        //     title: "The Spirit of Adventure",
        //     description: "Embark on exciting journeys and thrilling discoveries.",
        //     header: <Skeleton />,
        //     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        // },
    ];
    return (
        isClient ? <section id='first' className=' relative bg-slate-950 min-h-screen w-screen flex justify-center' suppressHydrationWarning>
            <BackgroundBeams />
            <div className=' h-screen absolute z-20 top-0 p-4 '>
                <div className='text-4xl text-center p-12'>Projects</div>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {items.map((item, i) => (
                        <div key={i} className='m-4 p-2'>

                            <PinContainer
                                title={item?.placeholder}
                                href={item?.href}
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        {item.title}
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            {item.description}
                                        </span>
                                    </div>
                                    <div className={`${item.imgClass}`}><Image src={item.img} alt="img" width={item.width} /></div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
                {/* <div className=' md:text-end md:pr-40 p-4 text-center md:p-10'>You can also check out other projects on my <Link target='_blank' href={"https://github.com/FreakQnZ"} className='cursor-pointer text-blue-500 font-semibold' >GitHub</Link></div> */}
            </div>
        </section > : null
        // <section></section>
    )
}

export default Section1