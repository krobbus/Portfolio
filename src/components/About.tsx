import Stack from "./Stack";

export default function About({ footerRef, stackRef }: { footerRef: React.RefObject<HTMLElement | null>; stackRef: React.RefObject<HTMLElement | null>; }) {
    return (
        <div id="aboutWrapper" className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div id="imgWrapper" className="lg:col-span-4 flex justify-center lg:sticky lg:top-28 lg:self-start h-fit">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                    
                    <img 
                        src="/images/Profile.jpg" 
                        alt="Profile picture of myself" 
                        className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-full lg:h-auto max-w-xs object-cover rounded-3xl border border-white/20 shadow-2xl"
                    />
                </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
                <div id="profileContainer" className="backdrop-blur-2xl bg-slate-900/40 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                    <h3 className="text-2xl font-extrabold text-white tracking-wide border-b border-white/10 pb-3 flex items-center space-x-2">
                        WHY ME ?
                    </h3>

                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                        I'm a web developer who enjoys turning ideas into interfaces people actually want to use.
                        My focus is on modern web development <span className="text-blue-300 font-semibold">(React, TypeScript, Next.js, Vite, Bootstrap, and TailwindCSS)</span> with a growing interest in how good architecture makes everything downstream easier.
                        I care about the details: <span className="text-blue-300 font-semibold">readable code, thoughtful UI, and building things that feel solid, not just functional</span>.
                        I bring genuine curiosity to every project, a habit of digging until I actually understand why something works, and a steady drive to keep leveling up my craft.
                        Outside of writing code, I'm usually exploring new tools, reading through documentation for fun (yes, really), or finding small ways to make my workflow a little smarter.
                        <br /><br />
                        <span className="italic text-slate-400">If you're looking for someone eager to learn, easy to work with, and serious about doing good work</span>
                    </p>

                    <button 
                        onClick={() => footerRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-500/20
                        hover:from-blue-500/30 hover:to-blue-500/30 border border-blue-500/40 text-blue-200 font-medium backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:border-blue-400 hover:scale-[1.02]
                        active:scale-95 transition-all duration-300 text-sm cursor-pointer"
                    >
                        Let's Connect
                    </button>
                </div>

                <Stack stackRef={stackRef} />
            </div>
        </div>
    );
}