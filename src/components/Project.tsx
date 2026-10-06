import { useState } from 'react';
import { projects } from '../references/ProjectDetailRef';

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
        <div className="space-y-2">
            <div className="flex items-center justify-between text-xs min-h-[28px] px-1">
                <span className="truncate font-medium text-slate-300 max-w-[80%]">
                    {currentSlide?.caption}
                </span>

                {totalSlides > 1 && (
                    <span className="font-mono text-[11px] text-blue-300 font-semibold bg-blue-950/60 border border-white/10 rounded-md px-2 py-0.5 shrink-0 ml-2">
                        {slideIndex + 1} / {totalSlides}
                    </span>
                )}
            </div>

            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-xl aspect-video flex items-center justify-center">          
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
                        hover:bg-slate-800 hover:border-blue-400 transition-all duration-200 opacity-80 group-hover:opacity-100 active:scale-95 z-20 cursor-pointer shadow-lg"
                    >
                        <img src="./images/icons/Left.png" alt="Previous" className="w-4 h-4 invert brightness-200" />
                    </button>
                )}

                {totalSlides > 1 && (
                    <button
                        onClick={nextSlide}
                        aria-label="Next Slide"
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 border border-white/20 text-white
                        hover:bg-slate-800 hover:border-blue-400 transition-all duration-200 opacity-80 group-hover:opacity-100 active:scale-95 z-20 cursor-pointer shadow-lg"
                    >
                        <img src="./images/icons/Right.png" alt="Next" className="w-4 h-4 invert brightness-200" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default function Project() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div id="projectList" className="space-y-12">
            {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 pt-6">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-slate-900/90 text-slate-300 
                        hover:border-blue-400 hover:text-white disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-slate-300 
                        disabled:cursor-not-allowed transition-all cursor-pointer"
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-9 h-9 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                                currentPage === page
                                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/50 font-bold'
                                    : 'bg-slate-900/90 text-slate-400 border-white/10 hover:border-blue-400 hover:text-white'
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-slate-900/90 text-slate-300 
                        hover:border-blue-400 hover:text-white disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-slate-300 
                        disabled:cursor-not-allowed transition-all cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            )}
            
            {currentProjects.map((project, idx) => (
                <div 
                    key={idx}
                    className="bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl
                    hover:border-white/20 transition-all duration-300"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-6 space-y-4">
                            <ProjectMediaFrame slides={project.slides} />

                            <div className="space-y-1">
                                <div className="flex flex-col lg:flex-row items-center mb-4 space-x-3">
                                    <span className="whitespace-nowrap overflow-hidden text-blue-400 font-mono font-bold text-xs sm:text-sm px-2.5 py-0.5 mb-2 lg:mb-0 rounded-md bg-blue-500/10 border border-blue-500/20">
                                        {project.id}
                                    </span>

                                    <span className="lg:text-left text-center text-xs text-slate-400">{project.category}</span>
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

            {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 pt-6">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-slate-900/90 text-slate-300 
                        hover:border-blue-400 hover:text-white disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-slate-300 
                        disabled:cursor-not-allowed transition-all cursor-pointer"
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-9 h-9 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                                currentPage === page
                                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/50 font-bold'
                                    : 'bg-slate-900/90 text-slate-400 border-white/10 hover:border-blue-400 hover:text-white'
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-slate-900/90 text-slate-300 
                        hover:border-blue-400 hover:text-white disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-slate-300 
                        disabled:cursor-not-allowed transition-all cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}