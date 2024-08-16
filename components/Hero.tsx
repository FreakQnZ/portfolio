"use client"

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { FlipWords } from './ui/flip-words'
import { HoverBorderGradient } from './ui/hover-border-gradient'

const Hero = () => {

    const scrolltofirst = () => {
        const ele = document.getElementById('first')
        ele?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className=' text-white w-full flex flex-col items-center relative'>
            <div className=' w-full'>
                <Spotlight className="top-20 2xl:-top-32 xl:top-0 lg:left-52 left-0" fill="white" />
                <Spotlight className=' top-48 -left-10 md:-left-32 md:top-40 md:h-[80vh] md:pt-40' fill='skyblue' />
                <Spotlight className='left-full h-[30vh]' fill='beige' />
            </div>
            <div className="h-screen w-full bg-slate-950  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>


            <div className=' z-20 flex flex-col items-center justify-between h-dvh p-2'>
                <p className="uppercase tracking-widest text-xs text-center">
                    Created With <span className=' font-semibold'>Next.JS Tailwind CSS Framer Motion</span>
                </p>

                <div>
                    <p className='uppercase tracking-widest text-center p-4 m-4 text-2xl lg:text-6xl'>Welcome to my</p>

                    <FlipWords words={['Portfolio', 'Blog', 'Diary', 'Space']} duration={2000} />
                </div>

                <div>
                    <div className=' text-lg text-center m-4'>
                        Hi I&apos;m Anuraag, A third year undergrad Computer Science student at PES University
                    </div>

                    <div className="flex justify-center text-center p-2">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            <span onClick={scrolltofirst} className='px-5'>Let&apos;s Go</span>
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Hero
