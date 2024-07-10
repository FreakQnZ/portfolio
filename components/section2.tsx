import React from 'react'
import { LampContainer } from './ui/lamp'
import { AnimatedTooltip } from './ui/animated-tooltip';

const people = [
    {
        id: 1,
        name: "Langchain",
        image: "/langchain.png"
    },
    {
        id: 2,
        name: "Numpy",
        image: "/numpy.png"
    },
    {
        id: 3,
        name: "Express JS",
        image: "/express.png"
    },
    {
        id: 4,
        name: "Next JS",
        image: "/next.png"
    },
    {
        id: 5,
        name: "Javascript",
        image: "/js.png"
    },
    {
        id: 6,
        name: "Python",
        image: "/python.png"
    },
];

const Section2 = () => {
    return (
        <section className=' relative  flex flex-col justify-between h-screen bg-slate-950 w-full'>
            <div className='hidden md:block'>

                <LampContainer>
                    <div className=' text-2xl font-semibold p-4'>Tech Stack</div>
                    <div className="flex flex-col md:flex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={people} />
                    </div>
                    <div>

                    </div>
                </LampContainer>
            </div>
            <div className='md:hidden'>

                <div className=' text-2xl font-semibold p-4'>Tech Stack</div>
                <div className="flex flex-col md:flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Section2