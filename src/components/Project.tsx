import { useState } from 'react';
import { project1Slides, project2Slides, project3Slides, project4Slides } from '../references/ProjectRef.tsx';

interface VideoSlide {
    src: string;
    caption: string;
}

function ProjectMediaFrame({ slides }: { slides: VideoSlide[] }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const totalSlides = slides.length;

    const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const currentSlide = slides[slideIndex];
    const isVideo = currentSlide?.src.toLowerCase().endsWith('.mp4');

    return (
        <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-xl aspect-video flex items-center justify-center">
            <div className="absolute top-3 left-3 flex items-center justify-between backdrop-blur-lg bg-blue-950/75 border border-white/50 rounded-xl px-3.5 py-1.5 text-xs text-slate-200 z-10 pointer-events-none">
                <span className="truncate px-2 py-0.5 font-medium text-slate-300 pr-2">
                    {currentSlide.caption}
                </span>
            </div>
            
            <div className="absolute top-3 right-3 flex items-center justify-between backdrop-blur-lg bg-blue-950/75 border border-white/50 rounded-xl px-3.5 py-1.5 text-xs text-slate-200 z-10 pointer-events-none">
                <span className="font-mono px-2 py-0.5 rounded-md text-[11px] text-blue-300 font-semibold shrink-0">
                    {slideIndex + 1} / {totalSlides}
                </span>
            </div>
            
            {isVideo ? (
                <video
                    key={currentSlide.src}
                    src={currentSlide.src}
                    controls
                    className="w-full h-full object-contain"
                />
            ) : (
                <img
                    src={currentSlide.src}
                    alt={currentSlide.caption}
                    className="w-full h-full object-contain transition-all duration-300 select-none"
                />
            )}

            {totalSlides > 1 && (
                <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 border border-white/20 text-white
                    hover:bg-slate-800 hover:border-blue-400 backdrop-blur-md transition-all duration-200 opacity-80 group-hover:opacity-100 active:scale-95 z-20 cursor-pointer shadow-lg"
                >
                    <img src="./images/Icons/Left.png" alt="Previous" className="w-4 h-4 invert brightness-200" />
                </button>
            )}

            {totalSlides > 1 && (
                <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 border border-white/20 text-white
                    hover:bg-slate-800 hover:border-blue-400 backdrop-blur-md transition-all duration-200 opacity-80 group-hover:opacity-100 active:scale-95 z-20 cursor-pointer shadow-lg"
                >
                    <img src="./images/Icons/Right.png" alt="Next" className="w-4 h-4 invert brightness-200" />
                </button>
            )}
        </div>
    );
}

export default function Project() {
    const projects = [
        {
            id: '[Project 01]',
            title: 'An AI-Driven 8-Bit Web Game For Personalized College Program Matching and Career Exploration',
            category: 'Lead Full-Stack Developer, Capstone Project',
            link: 'https://krobbus.github.io/8-Bit/',
            linkText: 'krobbus.github.io/8-Bit/',
            slides: project1Slides,
            pills: ['ReactJS', 'PhaserJS', 'Firebase', 'ExpressJS', 'Vite', 'Gemini API'],
            points: [
                'Lead a team of 3 as the Lead Full-Stack Developer to architect and launch an interactive web game designed to guide students through college program matching and career exploration.',
                'Engineered an AI-driven recommendation engine by integrating the Gemini API, processing user inputs in real-time to deliver highly personalized college and career pathways.',
                'Developed a fully responsive, mobile-first user interface using ReactJs and PhaserJS, ensuring seamless gameplay and accessibility across desktop, tablet, and mobile devices.',
                'Collaborated cross-functionally to manage project timelines, conduct code reviews, and ensure the seamless integration of front-end components with back-end AI services.'
            ]
        },
        {
            id: '[Project 02]',
            title: 'Mechanical Engineering Section (MES) Asset Management',
            category: 'Developer, Freelance Project during Internship',
            link: null,
            slides: project2Slides,
            pills: ['ReactJS', 'TypeScript', 'TailwindCSS', 'ExpressJS', 'PostgreSQL', 'JWT'],
            points: [
                'Developed a custom asset management dashboard using ReactJS to digitize and streamline the tracking of engineering equipment, measurements, and acquisition costs.',
                'Engineered a secure data-entry workflow utilizing React Hook Form and standard validation, reducing manual entry errors for critical equipment metrics and pricing.',
                'Designed a relational PostgreSQL database schema to efficiently store, categorize, and retrieve technical specifications and financial data for 500+ physical assets.',
                'Implemented a responsive, table-driven user interface with Tailwind CSS, allowing Deputy Chief and the engineering staffs to easily search, filter, and update equipment statuses in real-time.'
            ]
        },
        {
            id: '[Project 03]',
            title: 'FoRent: Rental Property Management System',
            category: 'Lead Full-Stack Developer and Web Designer, 3rd year Project',
            link: 'https://forent-rental.vercel.app/',
            linkText: 'forent-rental.vercel.app/',
            slides: project3Slides,
            pills: ['ReactJS', 'TypeScript', 'StripeJS', 'PostgreSQL', 'ExpressJS', 'Vite', 'Neon'],
            points: [
                'Architected a full-stack property management platform using React, TypeScript, Node.js, and Express, creating distinct, feature-rich management for landlords and tenants to manage leases, maintenance, and applications.',
                'Designed and implemented a relational database schema using PostgreSQL (hosted on Neon) to efficiently handle complex data relationships across users, properties, transactions, and maintenance requests.',
                'Integrated Stripe for secure rent and deposit payments, enabling tenants to pay online and landlords to track transaction history and payment status in real time.',
                'Deployed scalable application infrastructure utilizing Vercel for the frontend and Render for the backend, ensuring high availability and smooth delivery of updates.'
            ]
        },
        {
            id: '[Project 04]',
            title: 'PokeDex Wiki',
            category: 'Full-Stack Developer, 1st year Project',
            link: 'https://pokedex-by-alef.vercel.app/',
            linkText: 'pokedex-by-alef.vercel.app/',
            slides: project4Slides,
            pills: ['ReactJS', 'TypeScript', 'PokeAPI', 'SCSS'],
            points: [
                'Redesigned a retro-inspired Pokedex built with React and TypeScript, refocusing the original 1st-year project into a clean, dedicated data-reference tool by removing unnecessary account and static-page features.',
                'Integrated the PokeAPI to fetch real-time data for over 1,300 Pokemon, implementing batched loading and secondary API calls to populate detailed modal views with descriptions and abilities.',
                'Built smart search, type filtering, and sorting functionality, with robust error handling for misspelled queries, missing sprites, and empty filter results.',
                'Designed an adaptive UI using custom CSS3 Grid and Flexbox, including type-based icon sets and an animated landing page transition to enhance the overall browsing experience.'
            ]
        }
    ];

    return (
        <div id="projectList" className="space-y-12">
            {projects.map((project, idx) => (
                <div 
                    key={idx}
                    className="backdrop-blur-2xl bg-slate-900/40 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl
                    hover:border-white/20 transition-all duration-300"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-6 space-y-4">
                            <ProjectMediaFrame slides={project.slides} />

                            <div className="space-y-1">
                                <div className="flex items-center space-x-3">
                                    <span className="text-blue-400 font-mono font-bold text-xs sm:text-sm px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20">
                                        {project.id}
                                    </span>

                                    <span className="text-xs text-slate-400">{project.category}</span>
                                </div>

                                <h4 className="text-xl font-bold text-white leading-snug">{project.title}</h4>

                                {project.link && (
                                    <div className="text-xs text-slate-300 pt-0.5">
                                        Link:{' '}
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:underline font-mono"
                                        >
                                            {project.linkText}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                            <div className="pillContainer flex flex-wrap gap-2">
                            {project.pills.map((pill) => (
                                <span 
                                    key={pill}
                                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-200
                                    hover:border-blue-400/50 hover:bg-blue-500/10 transition-all"
                                >
                                    {pill}
                                </span>
                            ))}
                            </div>

                            <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                                {project.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start space-x-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}