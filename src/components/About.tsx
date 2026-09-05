import '../styles/About.css';

export default function About({ contactRef }: { contactRef: React.RefObject<HTMLElement | null> }) {
    return(
        <>
            <div id='imgWrapper'>
                <img src='/images/Profile.jpg' alt='Profile picture of myself' />
            </div>

            <div id='aboutWrapper'>
                <div id='profileContainer'>
                    <h3>WHY ME ?</h3>

                    <p>
                        I'm a web developer who enjoys turning ideas into interfaces people actually want to use.
                        My focus is on modern web development <span>(React, TypeScript, Next.js, Vite, Bootstrap, and TailwindCSS)</span> with a growing interest in how good architecture makes everything downstream easier.
                        I care about the details: <span>readable code, thoughtful UI, and building things that feel solid, not just functional</span>.
                        I'm genuine curiosity to every project, a habit of digging until I actually understand why something works, and a steady drive to keep leveling up my craft.
                        Outside of writing code, I'm usually exploring new tools, reading through documentation for fun (yes, really), or finding small ways to make my workflow a little smarter.
                        <br /><br />
                        If you're looking for someone eager to learn, easy to work with, and serious about doing good work
                    </p>

                    <button onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                        Let's Connect
                    </button>
                </div>

                <div id='stackContainer'>
                    <h3>TECH STACK</h3>
                    
                    <div id='listContainer'>
                        <div className='lists'>
                            <h4>Frontend</h4>

                            <div className='pillContainer'>
                                <span>HTML</span>
                                <span>SCSS</span>
                                <span>TailwindCSS</span>
                                <span>Bootstrap</span>
                                <span>JavaScript</span>
                                <span>TypeScript</span>
                                <span>ReactJS</span>
                                <span>NextJS</span>
                                <span>PhaserJS</span>
                            </div>
                        </div>

                        <div className='lists'>
                            <h4>Backend/Database</h4>

                            <div className='pillContainer'>
                                <span>REST API</span>
                                <span>NodeJS</span>
                                <span>ExpressJS</span>
                                <span>PostgreSQL</span>
                                <span>MySQL</span>
                                <span>Firebase</span>
                                <span>MariaDB</span>
                                <span>Neon</span>
                            </div>
                        </div>

                        <div className='lists'>
                            <h4>DevOps/DevTools</h4>

                            <div className='pillContainer'>
                                <span>Vite</span>
                                <span>Prettier</span>
                                <span>Git/Github</span>
                                <span>Github Actions</span>
                                <span>VS Code</span>
                                <span>Sublime Text</span>
                                <span>Vercel</span>
                                <span>Render</span>
                                <span>CronJob</span>
                            </div>
                        </div>

                        <div className='lists'>
                            <h4>Collaboration & Productivity</h4>

                            <div className='pillContainer'>
                                <span>Trello</span>
                                <span>Discord</span>
                            </div>
                        </div>

                        <div className='lists'>
                            <h4>Design Tools</h4>

                            <div className='pillContainer'>
                                <span>Framer</span>
                                <span>Figma</span>
                                <span>Canva</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}