// "use client"

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TestGenerate'
import { FlipWords } from './ui/flip-words'
import Link from 'next/link'
import { HoverBorderGradient } from './ui/hover-border-gradient'

const Hero = () => {

    return (
        <div className=' text-white max-w-7xl'>
            <div>
                <Spotlight className="md:left-50 -top-40 md:pt-0 md:top-44 md:h-[80vh] md:w-[50vw]" fill="white" />
                <Spotlight className=' top-48 -left-10 md:-left-32 md:-top-12 md:h-[80vh] md:pt-40' fill='skyblue' />
                <Spotlight className='left-full h-[30vh]' fill='beige' />
            </div>
            <div className="h-screen w-full bg-slate-950  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>


            <div className=' relative z-10 h-screen'>
                <p className="uppercase tracking-widest text-xs text-center pt-20">
                    Created With <span className=' font-semibold'>Next.JS Tailwind CSS Framer Motion</span>
                </p>

                <p className='uppercase tracking-widest text-center p-4 m-4 text-4xl lg:text-6xl pt-20'>Welcome to my</p>

                <FlipWords words={['Portfolio', 'Blog', 'Diary', 'Space']} duration={2000} />

                <div className=' relative z-10 pt-64 text-lg pl-10'>
                    Hi I'm Anuraag, A second year undergrad Computer Science student at PES University
                </div>

                <div className="pt-12 flex justify-center text-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span className='px-5'>Let's Go</span>
                    </HoverBorderGradient>
                </div>
            </div>
        </div>
    )
}



export default Hero