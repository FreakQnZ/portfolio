import React from 'react'
import { LampContainer } from './ui/lamp'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { StarsBackground } from './ui/stars-background';
import { ShootingStars } from './ui/shooting-stars';

import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconHome,
    IconBrandGmail,
    IconTerminal2,
    IconBrandPython,
} from "@tabler/icons-react";

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
        <section className='w-full relative'>
            <div className='hidden md:flex flex-col justify-between bg-slate-950 w-full items-center h-screen p-4'>

                <div className='w-full flex flex-col items-center'>
                    <span className=' text-4xl font-semibold p-4'>Timeline</span>
                    <div className='w-full p-4 flex justify-center'>
                        <ul className="timeline">
                            <li>
                                <div className="timeline-start">2008</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">Kendriya Vidyalaya Malleswaram</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">2022</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">PES University</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">2023</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">INTERN @ ThingQbator</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start">2024</div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="timeline-end timeline-box">...</div>
                                <hr />
                            </li>
                            {/* <li>
                                    <hr />
                                    <div className="timeline-start">2015</div>
                                    <div className="timeline-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="timeline-end timeline-box">Apple Watch</div>
                                </li> */}
                        </ul>
                    </div>
                </div>

                <div>
                    <div className=' text-4xl font-semibold text-center'>Technologies</div>
                    <div className="flex flex-row justify-center w-full">
                        <AnimatedTooltip items={people} />
                    </div>
                </div>

                <div className=' w-full flex flex-col items-center'>
                    <span className='text-4xl font-semibold p-6'>Extra Curricular Activities</span>
                    <div className="w-full flex justify-center">
                        <div className="card bg-slate-900 text-white">
                            <div className="card-body">
                                <h2 className="card-title text-white pb-4">Carnatic Music</h2>
                                <p>State Level</p>
                                <p>Junior Examination</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-blue-800">K V M</button>
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal divider-neutral"></div>
                        <div className="card bg-slate-900 text-white">
                            <div className="card-body">
                                <h2 className="card-title text-white pb-4">Tabala</h2>
                                <p>Senior Level Profeciency</p>
                                {/* <p>Junior Examination</p> */}
                                <div className="card-actions justify-end">
                                    <button className="btn bg-blue-800">K V M</button>
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal divider-neutral"></div>
                        <div className="card bg-slate-900 text-white">
                            <div className="card-body">
                                <h2 className="card-title text-white pb-4">College Basketball</h2>
                                <p>Regional Level</p>
                                <p>U17 and U19</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-blue-800">K V M</button>
                                </div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal divider-neutral"></div>
                        <div className="card bg-slate-900 text-white">
                            <div className="card-body">
                                <h2 className="card-title text-white pb-4">GDSC</h2>
                                <p>Student Chapter</p>
                                <p>Web Dev Member</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-yellow-400 text-black">PESU</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <StarsBackground />
                <ShootingStars />
            </div>
            <div className='md:hidden flex flex-col items-center w-full p-2 bg-slate-950'>
                <span className=' text-4xl p-2 m-4'>Timeline</span>
                <div className=' w-1/2 p-2 m-4'>
                    <ul className="timeline timeline-vertical">
                        <li>
                            <div className="timeline-start">2010</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">Kendriya Vidyalaya Malleswaram</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2022</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">PES University</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2023</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">Intern @ ThingQbator</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2024</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">....</div>
                            <hr />
                        </li>
                        {/* <li>
                            <hr />
                            <div className="timeline-start">2015</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">Apple Watch</div>
                        </li> */}
                    </ul>
                </div>
                <span className='text-4xl text-center'>Technologies</span>
                <div className='flex pr-5 m-4 '>
                    <AnimatedTooltip items={people} />
                </div>

                <div className=' w-full flex flex-col items-center'>
                    <span className='text-4xl text-center p-6'>Extra Curricular Activities</span>
                    <div className="w-full flex flex-col gap-4 items-center">
                        <div className="card bg-slate-900 text-white w-72">
                            <div className="card-body">
                                <h2 className="card-title text-white pb-4">Carnatic Music</h2>
                                <p>State Level</p>
                                <p>Junior Examination</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-blue-800">K V M</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-slate-900 text-white w-72">
                            <div className="card-body">
                                <h2 className="card-title text-white pb-4">Tabala</h2>
                                <p>Senior Level Profeciency</p>
                                {/* <p>Junior Examination</p> */}
                                <div className="card-actions justify-end">
                                    <button className="btn bg-blue-800">K V M</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-slate-900 text-white w-72">
                            <div className="card-body">
                                <h2 className="card-title text-white pb-4">College Basketball</h2>
                                <p>Regional Level</p>
                                <p>U17 and U19</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-blue-800">K V M</button>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-slate-900 text-white w-72">
                            <div className="card-body">
                                <h2 className="card-title text-white pb-4">GDSC</h2>
                                <p>Student Chapter</p>
                                <p>Web Dev Member</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-yellow-400 text-black">PESU</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <StarsBackground />
                <ShootingStars />

            </div>
        </section>
    )
}

export default Section2