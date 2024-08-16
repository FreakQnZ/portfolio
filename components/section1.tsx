"use client";

import { useState, useEffect } from 'react'
import React from 'react'
import Image from 'next/image';
import { PinContainer } from './ui/3d-pin';
import { BackgroundBeams } from './ui/background-beams';

// const Section1 = () => {

//     const [isClient, setIsClient] = useState(false)

//     useEffect(() => {
//         setIsClient(true)
//     }, [])

//     const items = [
//         {
//             title: "Auth Module",
//             description: "Auth module made from scratch using JWT, includes signup login and forgot password feature",
//             placeholder: "Github Link",
//             href: "https://github.com/FreakQnZ/Auth-Module",
//             img: "/jwt.png",
//             imgClass: "",
//             width: 300
//         },
//         {
//             title: "Robin Internships",
//             description: "Platofrom originally created for handling College fest student internships.",
//             placeholder: "Live Site Link",
//             href: "https://robinit.in/",
//             img: "/robin.png",
//             imgClass: "pt-10",
//             width: 300
//         },
//         {
//             title: "Task Manager",
//             description: "Task Manager web application with auth using clerk and a responsive and unique design.",
//             placeholder: "Live Site Link",
//             href: "https://task-manager-web-application-nine.vercel.app/",
//             img: "/taskmanager.png",
//             imgClass: "pt-6",
//             width: 300
//         },
//         {
//             title: "Anonymous Chat Room App",
//             description: "Chat App with Websockets for anonymous chating in rooms",
//             placeholder: "Github Link",
//             href: "https://github.com/FreakQnZ/CN-Project---Chat-app-with-WebSockets",
//             img: "/jwt.png",
//             imgClass: "",
//             width: 300
//         },
//         {
//             title: "Churn Prediction",
//             description: "Using Tensorflow to create a Deep Learning Model to predict Customer Loyalty",
//             placeholder: "Github Link",
//             href: "https://github.com/FreakQnZ/Neural-Network-Project",
//             img: "/churn.png",
//             imgClass: "pt-6 pl-10",
//             width: 200
//         },
//         {
//             title: "And Much More on my Github",
//             description: "Check out my Github for more projects and projects I am working on.",
//             placeholder: "Github Link",
//             href: "https://github.com/FreakQnZ",
//             img: "/github.png",
//             imgClass: "pt-6 pl-16",
//             width: 180
//         },
//         // {
//         //     title: "The Spirit of Adventure",
//         //     description: "Embark on exciting journeys and thrilling discoveries.",
//         //     header: <Skeleton />,
//         //     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//         // },
//     ];
//     return (
//         isClient ?
//             <section id='first' className=' w-full bg-slate-950'>
//                 <div className='text-4xl text-center p-12'>Projects</div>
//                 <PinContainer
//                     title="/ui.aceternity.com"
//                     href="#"
//                 >
//                     <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
//                         <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
//                             Aceternity UI
//                         </h3>
//                         <div className="text-base !m-0 !p-0 font-normal">
//                             <span className="text-slate-500 ">
//                                 Customizable Tailwind CSS and Framer Motion Components.
//                             </span>
//                         </div>
//                         <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
//                     </div>
//                 </PinContainer>
//                 {/* <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
//                     {items.map((item, i) => (
//                         <div key={i} className='m-4 p-2'>

//                             <PinContainer
//                                 title={item?.placeholder}
//                                 href={item?.href}
//                             >
//                                 <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
//                                     <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
//                                         {item.title}
//                                     </h3>
//                                     <div className="text-base !m-0 !p-0 font-normal">
//                                         <span className="text-slate-500 ">
//                                             {item.description}
//                                         </span>
//                                     </div>
//                                     <div className={`${item.imgClass}`}><Image src={item.img} height={200} alt="img" width={item.width} /></div>
//                                 </div>
//                             </PinContainer>
//                         </div>
//                     ))}
//                 </div> */}
//             </section > : null

//     )
// }

const AnimatedPinDemo = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        isClient ?
            <div className=" relative w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center bg-slate-950 gap-12 pb-10">
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
                <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            Aceternity UI
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                Customizable Tailwind CSS and Framer Motion Components.
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>
            </div> : null
    );
}

export default AnimatedPinDemo