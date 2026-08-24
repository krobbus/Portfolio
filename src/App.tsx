import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Analytics } from '@vercel/analytics/react';

import './styles/App.css';
import './styles/MediaSizing.css';
import './styles/Keyframes.css';
import './styles/Font.css';

import VideoSlideshow from './components/VideoSlideshow.tsx';
import { project1Slides, project2Slides, project3Slides, project4Slides } from './references/ProjectRef.tsx';
import CertSlideshow from './components/CertSlideshow.tsx';
import { certSlides } from './references/CertRef.tsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { name, email, number, subject, message },
        import.meta.env.VITE_PUBLIC_KEY
      );
      alert("Message sent! I'll get back to you soon.");
      setName('');
      setEmail('');
      setNumber('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error(err);
      alert('Something went wrong — please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id='portfolio-container'>
      <Analytics />

      <header>
        <div id='top-header'>
          <address>Laguna, Philippines</address>
          <span>&copy; 2026</span>
        </div>

        <div id='main-header'>
          <h1>ALEF JUSTIN LORESCA</h1>
          <h2>A React Developer, where I enjoy turning complex projects <br /> into intuitive and customer-focused experience.</h2>
        </div>
    
        <div id="contact-pills">
          <div className="pill-wrapper">
            <div className="social-hint">
              <div className="floating-icons">
                <img src="./images/Icons/LinkedIn.png" alt="LinkedIn Icon" className="icon float-1" />
                <img src="./images/Icons/Github.png" alt="GitHub Icon" className="icon float-2" />
                <img src="./images/Icons/Messenger.png" alt="Messenger Icon" className="icon float-3" />
                <img src="./images/Icons/Instagram.png" alt="Instagram Icon" className="icon float-4" />
              </div>

              <div className="hint-text">
                <span>You can find my socials here</span>
                <span className="arrow">↴</span>
              </div>
            </div>

            <a href="#contact-section" className="pill">
              <span>Email Me</span>
              <img src="./images/Icons/Email.png" alt="Email Icon" />
            </a>
          </div>

          <a 
            href="https://drive.google.com/file/d/1acBCQFhimyQaTq0g9gED2f6idU5FO0Ww/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="pill"
          >
            <span>E-Resume</span>
            <img src="./images/Icons/Resume.png" alt="Resume Icon" />
          </a>
        </div>
      </header>

      <main>
        <nav>
          <span onClick={() => { window.location.hash = 'top-header'; }}>Alef Justin Loresca</span>

          <ul>
            <li><a href='#top-header'>Home</a></li>
            <li><a href='#about-section'>About Me</a></li>
            <li><a href='#stack-section'>Stacks</a></li>
            <li><a href='#projects-section'>Projects</a></li>
            <li><a href='#certifications-section'>Certifications</a></li>
            <li><a href='#contact-section'>Contact</a></li>
          </ul>

          <img
            className={`menu-toggle ${menuOpen ? 'hidden' : ''}`}
            src='./images/Icons/Menu.png'
            onClick={() => setMenuOpen(true)}
            aria-label='Open menu'
            alt='Menu icon'
          />
        
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <img
              className='menu-toggle-inside'
              src='./images/Icons/Menu.png'
              onClick={() => setMenuOpen(false)}
              aria-label='Close menu'
              alt='Menu icon'
            />

            <ul>
              <li><a href='#top-header' onClick={handleNavClick}>Home</a></li>
              <li><a href='#about-section' onClick={handleNavClick}>About Me</a></li>
              <li><a href='#stack-section' onClick={handleNavClick}>Stacks</a></li>
              <li><a href='#projects-section' onClick={handleNavClick}>Projects</a></li>
              <li><a href='#certifications-section' onClick={handleNavClick}>Certifications</a></li>
              <li><a href='#contact-section' onClick={handleNavClick}>Contact</a></li>
            </ul>
          </div>
        </nav>

        <section id='about-section'>
          <div id='about-img-wrapper'>
            <img src='/images/Profile.jpg' alt='profile picture of myself' />
          </div>

          <div id='about-details-wrapper'>
            <section id='profile-section'>
              <h3>WHY ME ?</h3>

              <p>
                I'm a web developer who enjoys turning ideas into interfaces people actually want to use.
                My focus is on modern web development <span>(React, Next.js, and clean, semantic front-end structure)</span> with a growing interest in how good architecture makes everything downstream easier.
                I care about the details: <span>readable code, thoughtful UI, and building things that feel solid, not just functional</span>.
                I'm genuine curiosity to every project, a habit of digging until I actually understand why something works, and a steady drive to keep leveling up my craft.
                Outside of writing code, I'm usually exploring new tools, reading through documentation for fun (yes, really), or finding small ways to make my workflow a little smarter.
                <br /><br />
                If you're looking for someone eager to learn, easy to work with, and serious about doing good work
              </p>

              <a 
                href="#contact-section" 
                className="lets-talk-btn"
              >
                Let's Talk 
                <img 
                  src="./images/Icons/Email.png" 
                  alt="Email Icon" 
                  style={{ pointerEvents: 'none' }} 
                />
              </a>
            </section>

            <section id='stack-section'>
              <h3>TECH STACK</h3>

              <div className='list-container' id='frontend'>
                <p>Frontend</p>

                <div className='pill-container'>
                  <span>HTML</span>
                  <span>SCSS</span>
                  <span>TailwindCSS</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>ReactJS</span>
                  <span>NextJS</span>
                  <span>PhaserJS</span>
                </div>
              </div>

              <div className='list-container' id='backend'>
                <p>Backend/Database</p>

                <div className='pill-container'>
                  <span>NodeJS</span>
                  <span>ExpressJS</span>
                  <span>PostgreSQL</span>
                  <span>MySQL</span>
                  <span>Firebase</span>
                  <span>MariaDB</span>
                  <span>Neon</span>
                </div>
              </div>

              <div className='list-container' id='backend'>
                <p>DevOps/Dev Tools</p>

                <div className='pill-container'>
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

              <div className='list-container' id='backend'>
                <p>Collaboration & Productivity</p>

                <div className='pill-container'>
                  <span>Trello</span>
                  <span>Discord</span>
                </div>
              </div>

              <div className='list-container' id='backend'>
                <p>Design Tools</p>

                <div className='pill-container'>
                  <span>Framer</span>
                  <span>Figma</span>
                  <span>Canva</span>
                  <span>IbisPaint X</span>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section id='projects-section'>
          <h3>SELECTED WORKS</h3>
          
          <div id='project-list'>
            <div id='project-1' className='project-cards'>
              <VideoSlideshow slides={project1Slides} />

              <div className='project-id'>
                <span className='project-num'>[Project 01]</span>
                <h4>An AI-Driven 8-Bit Web Game For Personalized College Program Matching and Career Exploration</h4>
                <span className='project-category'>Lead Full-Stack Developer, Capstone Project</span>
                <span className='project-link'>Link: <a href='https://krobbus.github.io/8-Bit/' target='_blank' rel='noopener noreferrer'>krobbus.github.io/8-Bit/</a></span>
              </div>

              <ul className='project-description'>
                <li><span>Lead a team of 3 as the Lead Full-Stack Developer</span> to architect and launch <span>an interactive web game designed to guide students through college program matching and career exploration.</span></li>
                <li>Engineered <span>an AI-driven recommendation engine by integrating the Gemini API</span>, processing user inputs in real-time to deliver highly personalized college and career pathways.</li>
                <li>Developed <span>a fully responsive, mobile-first user interface using ReactJs and PhaserJS</span>, ensuring seamless gameplay and accessibility across desktop, tablet, and mobile devices.</li>
                <li>Collaborated cross-functionally to manage project timelines, conduct code reviews, and ensure the seamless integration of front-end components with back-end AI services.</li>
              </ul>
            </div>

            <div id='project-2' className='project-cards'>
              <VideoSlideshow slides={project2Slides} />

              <div className='project-id'>
                <span className='project-num'>[Project 02]</span>
                <h4>Mechanical Engineering Section (MES) Asset Management</h4>
                <span className='project-category'>Developer, Freelance Project during Internship</span>
              </div>

              <ul className='project-description'>
                <li>Developed <span>a custom asset management dashboard using ReactJS</span> to digitize and streamline the tracking of engineering equipment, measurements, and acquisition costs.</li>
                <li>Engineered a secure data-entry workflow <span>utilizing React Hook Form and standard validation</span>, reducing manual entry errors for critical equipment metrics and pricing.</li>
                <li>Designed a relational <span>PostgreSQL database schema</span> to efficiently store, categorize, and <span>retrieve technical specifications and financial data for 500+ physical assets</span>.</li>
                <li><span>Implemented a responsive, table-driven user interface with Tailwind CSS</span>, allowing Deputy Chief and the engineering staffs to easily search, filter, and update equipment statuses in real-time.</li>
              </ul>
            </div>

            <div id='project-3' className='project-cards'>
              <VideoSlideshow slides={project3Slides} />

              <div className='project-id'>
                <span className='project-num'>[Project 03]</span>
                <h4>FoRent: Rental Property Management System</h4>
                <span className='project-category'>Lead Full-Stack Developer and Web Designer, 3rd year Project</span>
                <span className='project-link'>Link: <a href='https://forent-rental.vercel.app/' target='_blank' rel='noopener noreferrer'>forent-rental.vercel.app/</a></span>
              </div>

              <ul className='project-description'>
                <li>Architected <span>a full-stack property management platform using React, TypeScript, Node.js, and Express</span>, creating distinct, feature-rich management for landlords and tenants to manage leases, maintenance, and applications.</li>
                <li>Designed and <span>implemented a relational database schema using PostgreSQL (hosted on Neon)</span> to efficiently handle complex data relationships across users, properties, transactions, and maintenance requests.</li>
                <li>Integrated <span>Stripe for secure rent and deposit payments</span>, enabling tenants to pay online and landlords to track transaction history and payment status in real time.</li>
                <li>Deployed scalable application infrastructure utilizing <span>Vercel for the frontend and Render for the backend</span>, ensuring high availability and smooth delivery of updates.</li>
              </ul>
            </div>

            <div id='project-4' className='project-cards'>
              <VideoSlideshow slides={project4Slides} />

              <div className='project-id'>
                <span className='project-num'>[Project 04]</span>
                <h4>PokeDex Research Lab Wiki</h4>
                <span className='project-category'>Full-Stack Developer, 1st year Project</span>
                <span className='project-link'>Link: <a href='https://pokedex-by-alef.vercel.app/' target='_blank' rel='noopener noreferrer'>pokedex-by-alef.vercel.app/</a></span>
              </div>

              <ul className='project-description'>
                <li>Redesigned <span>a retro-inspired Pokedex built with React and TypeScript</span>, refocusing the original 1st-year project into a clean, dedicated data-reference tool by removing unnecessary account and static-page features.</li>
                <li>Integrated <span>the PokeAPI to fetch real-time data for over 1,300 Pokemon</span>, implementing batched loading and secondary API calls to populate detailed modal views with descriptions and abilities.</li>
                <li>Built <span>smart search, type filtering, and sorting functionality</span>, with robust error handling for misspelled queries, missing sprites, and empty filter results.</li>
                <li>Designed <span>an adaptive UI using custom CSS3 Grid and Flexbox</span>, including type-based icon sets and an animated landing page transition to enhance the overall browsing experience.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id='certifications-section'>
          <h3>CERTIFICATIONS</h3>

          <CertSlideshow slides={certSlides} />
        </section>
      </main>

      <footer id='contact-section'>
        <div id='email-container'>
          <h3>KEEP IN TOUCH</h3>
          
          <form onSubmit={handleSubmit}>
            <input id='name-input' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='(OPTIONAL) MY NAME IS' />
            <input id='email-input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='MY EMAIL IS' required />
            <input id='number-input' type='tel' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='(OPTIONAL) MY PHONE NUMBER IS' />

            <select id='subject-select'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option id='default' value='' disabled hidden>SUBJECT LINE</option>
              <option value="I'D LIKE TO SET A MEETING">I'D LIKE TO SET A MEETING</option>
              <option value="I'D LIKE TO ASK A QUESTION">I'D LIKE TO ASK A QUESTION</option>
              <option value="I'D LIKE TO MAKE A PROPOSAL">I'D LIKE TO MAKE A PROPOSAL</option>
            </select>

            {subject === "I'D LIKE TO SET A MEETING" ? (
              <button
                type='button'
                onClick={() => window.open('https://calendly.com/lorescajustin/15-minutes-meeting', '_blank', 'noopener,noreferrer')}
              >
                Book a time on Calendly &rarr;
              </button>
            ) : (
              <>
                <textarea id='message-input' rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="I'D LIKE TO TALK ABOUT" required />

                <button 
                  type='submit'
                  disabled={sending}
                >
                  {sending ? ' Sending...' : ' Send Message'}
                  <img src='./images/Icons/Email.png' alt='Email Icon' />
                </button>
              </>
            )}
          </form>

          <div id='contact-containers'>
            <a href="https://github.com/krobbus" target="_blank" rel="noopener noreferrer">
              <img src="./images/Icons/Github.png" alt="Github Icon" />
            </a>

            <a href='https://www.linkedin.com/in/alefjustinloresca/' target='_blank' rel='noopener noreferrer'>
              <img src='./images/Icons/LinkedIn.png' alt='LinkedIn Icon' />
            </a>

            <a href='https://www.instagram.com/ajloresca/' target='_blank' rel='noopener noreferrer'>
              <img src='./images/Icons/Instagram.png' alt='Instagram Icon' />
            </a>

            <a href='https://m.me/lorescaalef/' target='_blank' rel='noopener noreferrer'>
              <img src='./images/Icons/Messenger.png' alt='Messenger Icon' />
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default App