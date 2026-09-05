import VideoSlideshow from './VideoSlideshow.tsx';
import { project1Slides, project2Slides, project3Slides, project4Slides } from '../references/ProjectRef.tsx';
import '../styles/Project.css';

export default function Project(){
    return(  
        <div id='projectList'>
            <div id='project1' className='projectCards'>
                <div className='projectDisplay'>
                    <VideoSlideshow slides={project1Slides} />

                    
                    <div className='projectId'>
                        <span className='projectNum'>[Project 01]</span>
                        <h4>An AI-Driven 8-Bit Web Game For Personalized College Program Matching and Career Exploration</h4>
                        <span className='projectCategory'>Lead Full-Stack Developer, Capstone Project</span>
                        <span className='projectLink'>Link: <a href='https://krobbus.github.io/8-Bit/' target='_blank' rel='noopener noreferrer'>krobbus.github.io/8-Bit/</a></span>
                    </div>
                </div>

                <ul className='projectDescription'>
                    <div className='pillContainer'>
                        <span>ReactJS</span>
                        <span>PhaserJS</span>
                        <span>Firebase</span>
                        <span>ExpressJS</span>
                        <span>Vite</span>
                        <span>Gemini API</span>
                    </div>

                    <div className='listContainer'>
                        <li><span>Lead a team of 3 as the Lead Full-Stack Developer</span> to architect and launch <span>an interactive web game designed to guide students through college program matching and career exploration.</span></li>
                        <li>Engineered <span>an AI-driven recommendation engine by integrating the Gemini API</span>, processing user inputs in real-time to deliver highly personalized college and career pathways.</li>
                        <li>Developed <span>a fully responsive, mobile-first user interface using ReactJs and PhaserJS</span>, ensuring seamless gameplay and accessibility across desktop, tablet, and mobile devices.</li>
                        <li>Collaborated cross-functionally to manage project timelines, conduct code reviews, and ensure the seamless integration of front-end components with back-end AI services.</li>
                    </div>
                </ul>
            </div>

            <div id='project2' className='projectCards'>
                <div className='projectDisplay'>
                <VideoSlideshow slides={project2Slides} />

                <div className='projectId'>
                    <span className='projectNum'>[Project 02]</span>
                    <h4>Mechanical Engineering Section (MES) Asset Management</h4>
                    <span className='projectCategory'>Developer, Freelance Project during Internship</span>
                </div>
                </div>

                <ul className='projectDescription'>
                <div className='pillContainer'>
                    <span>ReactJS</span>
                    <span>TypeScript</span>
                    <span>TailwindCSS</span>
                    <span>ExpressJS</span>
                    <span>PostgreSQL</span>
                    <span>JWT</span>
                </div>

                <div className='listContainer'>
                    <li>Developed <span>a custom asset management dashboard using ReactJS</span> to digitize and streamline the tracking of engineering equipment, measurements, and acquisition costs.</li>
                    <li>Engineered a secure data-entry workflow <span>utilizing React Hook Form and standard validation</span>, reducing manual entry errors for critical equipment metrics and pricing.</li>
                    <li>Designed a relational <span>PostgreSQL database schema</span> to efficiently store, categorize, and <span>retrieve technical specifications and financial data for 500+ physical assets</span>.</li>
                    <li><span>Implemented a responsive, table-driven user interface with Tailwind CSS</span>, allowing Deputy Chief and the engineering staffs to easily search, filter, and update equipment statuses in real-time.</li>
                </div>
                </ul>
            </div>

            <div id='project3' className='projectCards'>
                <div className='projectDisplay'>
                <VideoSlideshow slides={project3Slides} />

                <div className='projectId'>
                    <span className='projectNum'>[Project 03]</span>
                    <h4>FoRent: Rental Property Management System</h4>
                    <span className='projectCategory'>Lead Full-Stack Developer and Web Designer, 3rd year Project</span>
                    <span className='projectLink'>Link: <a href='https://forent-rental.vercel.app/' target='_blank' rel='noopener noreferrer'>forent-rental.vercel.app/</a></span>
                </div>
                </div>

                <ul className='projectDescription'>
                <div className='pillContainer'>
                    <span>ReactJS</span>
                    <span>TypeScript</span>
                    <span>StripeJS</span>
                    <span>PostgreSQL</span>
                    <span>ExpressJS</span>
                    <span>Vite</span>
                    <span>Neon</span>
                </div>

                <div className='listContainer'>
                    <li>Architected <span>a full-stack property management platform using React, TypeScript, Node.js, and Express</span>, creating distinct, feature-rich management for landlords and tenants to manage leases, maintenance, and applications.</li>
                    <li>Designed and <span>implemented a relational database schema using PostgreSQL (hosted on Neon)</span> to efficiently handle complex data relationships across users, properties, transactions, and maintenance requests.</li>
                    <li>Integrated <span>Stripe for secure rent and deposit payments</span>, enabling tenants to pay online and landlords to track transaction history and payment status in real time.</li>
                    <li>Deployed scalable application infrastructure utilizing <span>Vercel for the frontend and Render for the backend</span>, ensuring high availability and smooth delivery of updates.</li>
                </div>
                </ul>
            </div>

            <div id='project4' className='projectCards'>
                <div className='projectDisplay'>
                <VideoSlideshow slides={project4Slides} />

                <div className='projectId'>
                    <span className='projectNum'>[Project 04]</span>
                    <h4>PokeDex Wiki</h4>
                    <span className='projectCategory'>Full-Stack Developer, 1st year Project</span>
                    <span className='projectLink'>Link: <a href='https://pokedex-by-alef.vercel.app/' target='_blank' rel='noopener noreferrer'>pokedex-by-alef.vercel.app/</a></span>
                </div>
                </div>

                <ul className='projectDescription'>
                <div className='pillContainer'>
                    <span>ReactJS</span>
                    <span>TypeScript</span>
                    <span>PokeAPI</span>
                    <span>SCSS</span>
                </div>

                <div className='listContainer'>
                    <li>Redesigned <span>a retro-inspired Pokedex built with React and TypeScript</span>, refocusing the original 1st-year project into a clean, dedicated data-reference tool by removing unnecessary account and static-page features.</li>
                    <li>Integrated <span>the PokeAPI to fetch real-time data for over 1,300 Pokemon</span>, implementing batched loading and secondary API calls to populate detailed modal views with descriptions and abilities.</li>
                    <li>Built <span>smart search, type filtering, and sorting functionality</span>, with robust error handling for misspelled queries, missing sprites, and empty filter results.</li>
                    <li>Designed <span>an adaptive UI using custom CSS3 Grid and Flexbox</span>, including type-based icon sets and an animated landing page transition to enhance the overall browsing experience.</li>
                </div>
                </ul>
            </div>
        </div>
    )
}