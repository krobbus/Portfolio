export default function Stack({ stackRef }: { stackRef: React.RefObject<HTMLElement | null> }) {
    return(
        <section id="stackContainer" ref={stackRef} className="space-y-6">
            <h3 className="text-2xl font-extrabold text-white tracking-wide border-b border-white/10 pb-3">
                TECH STACK
            </h3>
            
            <div id="listContainer" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                {
                    title: 'Frontend Development',
                    items: ['HTML5', 'CSS3', 'SCSS', 'Styled Components', 'JavaScript', 'TypeScript', 'React', 'PhaserJS', 'React Hook Form', 'React Router', 'Tailwind CSS', 'Bootstrap', 'Vite']
                },
                {
                    title: 'Backend and Databases',
                    items: ['Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'MariaDB', 'Firebase', 'Neon']
                },
                {
                    title: 'DevOps and Tools',
                    items: ['Git/Github', 'Github Actions', 'Vercel', 'Render', 'CronJob', 'VS Code', 'Prettier', 'Notion']
                },
                {
                    title: 'Design and Collaborations',
                    items: ['Figma', 'Framer', 'Canva', 'IbisPaint X', 'Trello', 'Discord']
                }
                ].map((category, idx) => (
                    <div
                        key={idx}
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3
                        hover:border-blue-500/30 transition-all duration-300"
                    >
                        <h4 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">{category.title}</h4>

                        <div className="pillContainer flex flex-wrap gap-2">
                            {category.items.map((item) => (
                                <span 
                                    key={item} 
                                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-200
                                    hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-200 transition-all cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}